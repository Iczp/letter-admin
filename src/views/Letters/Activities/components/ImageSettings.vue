<script lang="ts" setup>
import { Dialog } from '@/components/Dialog';
import { useDesign } from '@/hooks/web/useDesign';
import { nextTick, unref, ref, watch, onBeforeUnmount, onMounted, computed } from 'vue';
import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.min.css';
import QRCode from 'qrcode';

import { useDebounceFn } from '@vueuse/core';
import { BaseButton } from '@/components/Button';
import { ElUpload, UploadFile, ElTooltip, ElMessage } from 'element-plus';

const props = defineProps({
  width: {
    type: [String, Number],
    default: 640,
  },
  height: {
    type: [String, Number],
    default: 780,
  },
  imageUrl: {
    type: String,
    default:
      'https://hips.hearstapps.com/hmg-prod/images/%E5%AE%8B%E6%99%BA%E5%AD%9D-1597774015.jpg?crop=0.500xw:1.00xh;0.500xw,0&resize=640:*',
    // required: true
  },
  cropBoxWidth: {
    type: Number,
    default: 200,
  },
  cropBoxHeight: {
    type: Number,
    default: 200,
  },
  boxWidth: {
    type: [Number, String],
    default: 600,
  },
  boxHeight: {
    type: [Number, String],
    default: 460,
  },
  showResult: {
    type: Boolean,
    default: true,
  },
  showActions: {
    type: Boolean,
    default: true,
  },
});

const visible = ref(false);
const title = ref('请选择');

const { getPrefixCls } = useDesign();

const prefixCls = getPrefixCls('image-cropping');

const getBase64 = useDebounceFn(() => {
  imgBase64.value = unref(cropperRef)?.getCroppedCanvas()?.toDataURL() ?? '';
}, 80);

const resetCropBox = () => {
  const containerData = unref(cropperRef)?.getContainerData();
  unref(cropperRef)?.setCropBoxData({
    width: props.cropBoxWidth,
    height: props.cropBoxHeight,
    left: (containerData?.width || 0) / 2 - 100,
    top: (containerData?.height || 0) / 2 - 100,
  });
  imgBase64.value = unref(cropperRef)?.getCroppedCanvas()?.toDataURL() ?? '';
};

const getBoxStyle = computed(() => {
  return {
    width: `${props.boxWidth}px`,
    height: `${props.boxHeight}px`,
  };
});

// 获取对应的缩小倍数的宽高

const imgBase64 = ref('');
const imgRef = ref<HTMLImageElement>();
const cropperRef = ref<Cropper>();

const qrcodeRect = ref<Cropper.SetDataOptions>({
  x: 109.56521739130434,
  y: 39.130434782608695,
  width: 260.8695652173913,
  height: 260.8695652173913,
  rotate: 0,
  scaleX: 1,
  scaleY: 1,
});

const cropBoxData = ref<Cropper.SetCropBoxDataOptions>({
  height: 58.66668701171875,
  left: 431.33331298828125,
  top: 363.33331298828125,
  width: 58.66668701171875,
});
const intiCropper = () => {
  console.log('intiCropper', unref(imgRef));
  if (!unref(imgRef)) return;
  const imgEl = unref(imgRef)!;
  console.log('imgEl', imgEl);
  cropperRef.value = new Cropper(imgEl, {
    aspectRatio: 1,
    viewMode: 1,
    dragMode: 'move',
    // cropBoxResizable: false,
    // cropBoxMovable: false,
    toggleDragModeOnDblclick: false,
    checkCrossOrigin: false,

    ready() {
      unref(cropperRef)!.setData(qrcodeRect.value);
      unref(cropperRef)?.setCropBoxData(cropBoxData.value);
      // resetCropBox();
    },
    cropmove() {
      qrcodeRect.value = cropperRef.value!.getData();

      // const cropBoxData = cropperRef.value!.getCropBoxData();
      // console.log('cropmove', cropBoxData, data);
      // getBase64();
    },
    zoom() {
      getBase64();
    },
    crop() {
      // console.log('cropmove');
      // getBase64();
    },
  });
};

const uploadChange = (uploadFile: UploadFile) => {
  // 判断是否是图片
  if (uploadFile?.raw?.type.indexOf('image') === -1) {
    ElMessage.error('请上传图片格式的文件');
    return;
  }
  console.log('url', uploadFile.raw);

  if (!uploadFile.raw) return;
  // 获取图片的访问地址
  const url = URL.createObjectURL(uploadFile.raw);

  console.log('url', url);

  unref(cropperRef)?.replace(url);
};

const reset = () => {
  unref(cropperRef)?.reset();
};

onMounted(() => {
  intiCropper();
});

watch(
  () => props.imageUrl,
  async (url) => {
    if (url) {
      unref(cropperRef)?.replace(url);
      await nextTick();
      resetCropBox();
    }
  },
);

onBeforeUnmount(() => {
  unref(cropperRef)?.destroy();
});

let qrCodeUrl = '';
const generateQRCode = async (url: string = 'https://example.com') => {
  try {
    qrCodeUrl = await QRCode.toDataURL(url, {});
  } catch (err) {
    console.error('生成二维码时出错:', err);
  }
};

// 插入二维码并导出图片
const insertQRCodeAndExport = async () => {
  const cropperInstance = unref(cropperRef);
  if (!cropperInstance) return;

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const cropBoxData = cropperInstance.getCropBoxData();
  // const imageData = cropperInstance.getImageData();
  // const containerData = cropperInstance.getContainerData();
  // const canvasData = cropperInstance.getCanvasData();
  // console.log('canvasData', canvasData);
  // console.log('containerData', containerData);

  console.log('cropBoxData', cropBoxData);
  // console.log('imageData', imageData);
  const data = cropperInstance.getData();
  console.log('data', data);
  const img = imgRef.value!;
  canvas.width = img.width;
  canvas.height = img.height;

  ctx.drawImage(img, 0, 0, img.width, img.height);

  const url: string = 'https://example.com';
  qrCodeUrl = await QRCode.toDataURL(url, { width: data.width, margin: 2 });
  const qrImage = await loadImage(qrCodeUrl);
  ctx.drawImage(qrImage, data.x, data.y, data.width, data.height);

  const resultUrl = canvas.toDataURL('image/png');
  imgBase64.value = resultUrl;
  // console.log(resultUrl); // 处理合成后的图片，例如展示或下载
};

// 辅助函数：加载图片
const loadImage = (url: string) =>
  new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = url;
  });

const open = (args: any) => {
  visible.value = true;
  nextTick(() => {
    intiCropper();
  });
};
const close = () => {
  visible.value = false;
};

const onConfirm = () => {
  insertQRCodeAndExport()
    .then((res) => {
      console.log('res', res);
      // close();
    })
    .catch((err) => {
      console.log('error', err);
    });
};
const onCancel = () => {
  close();
};

defineExpose({ open, close });
</script>

<template>
  <Dialog v-model="visible" :width="width" :maxHeight="height" :title="title">
    <div>
      <div
        :class="{
          [prefixCls]: true,
          'flex items-center flex-col': showResult,
        }"
      >
        <div>
          <div :style="getBoxStyle" class="flex justify-center items-center">
            <img
              ref="imgRef"
              :src="imageUrl"
              class="block max-w-full"
              crossorigin="anonymous"
              alt=""
              srcset=""
            />
          </div>
          <div>{{ qrcodeRect }}</div>
        </div>
        <div v-if="imgBase64 && showResult">
          <div class="flex justify-center items-center">
            <img :src="imgBase64" class="w-full" />
          </div>
        </div>
      </div>
    </div>

    <template #footer>
      <div class="flex flex-row justify-between items-center">
        <div class="flex flex-row items-center gap-2">
          <ElUpload
            action="''"
            accept="image/*"
            :auto-upload="false"
            :show-file-list="false"
            :on-change="uploadChange"
          >
            <BaseButton type="primary" class="mt-2px">
              <Icon icon="vi-ep:upload-filled" /> 上传图片
            </BaseButton>
          </ElUpload>
        </div>
        <div>
          <BaseButton type="primary" @click="onConfirm"> 确定 </BaseButton>
          <BaseButton @click="onCancel">取消</BaseButton>
        </div>
      </div>
    </template>
  </Dialog>
</template>

<style>
.cropper-crop-box {
  position: relative;
}

.cropper-crop-box::after {
  content: '二维码位置' !important;
  position: absolute;
  pointer-events: none;
  color: rgb(0, 0, 0);
  border: 10px solid #000000c7;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}
</style>

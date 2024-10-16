<template>
  <div>
    <canvas ref="canvasRef"></canvas>

    <input type="file" @change="onFileChange" />
    <label for="textColor">选择文本颜色: </label>
    <input type="color" id="textColor" v-model="selectedColor" @input="updateTextColor" />

    <label for="fontSize">选择字体大小: </label>
    <input type="number" id="fontSize" v-model="fontSize" @input="updateTextFontSize" />

    <label for="fontFamily">选择字体: </label>
    <select id="fontFamily" v-model="fontFamily" @change="updateTextFontFamily">
      <option value="Arial">Arial</option>
      <option value="Helvetica">Helvetica</option>
      <option value="Courier">Courier</option>
      <option value="Times New Roman">Times New Roman</option>
    </select>

    <div>
      <button @click="getAllObjectsInfo">获取所有对象信息</button>
    </div>

    <div v-if="selectedObjectInfo">
      <h3>选中对象信息：</h3>
      <p>类型: {{ selectedObjectInfo.type }}</p>
      <p>位置: ({{ selectedObjectInfo.left }}, {{ selectedObjectInfo.top }})</p>
      <p>宽度: {{ selectedObjectInfo.width }}</p>
      <p>高度: {{ selectedObjectInfo.height }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue';
import * as fabric from 'fabric';
import { base64ToBlob } from '@/utils/base64ToBlob';

interface CanvasData {
  backgroundImage: string | null;
  qrCodeImage: string | null;
  texts: Array<{
    text: string;
    left: number;
    top: number;
    color: string;
    fontSize: number;
    fontFamily: string;
  }>;
}

const canvasRef = ref<HTMLCanvasElement | null>(null);
let canvas: fabric.Canvas | null = null;
let textObjects: fabric.Textbox[] = []; // 保存文本对象的引用

const canvasData = ref<CanvasData>({
  backgroundImage: null,
  qrCodeImage: null,

  texts: [
    {
      text: '{{客户名字}}',
      left: 50,
      top: 100,
      color: '#000000',
      fontSize: 24,
      fontFamily: 'Arial',
    },
    {
      text: '{{二维码位置}}',
      left: 50,
      top: 200,
      color: '#000000',
      fontSize: 24,
      fontFamily: 'Arial',
    },
    {
      text: '{{邀请码}}',
      left: 50,
      top: 300,
      color: '#000000',
      fontSize: 24,
      fontFamily: 'Arial',
    },
  ],
});

const selectedColor = ref('#000000'); // 默认颜色为黑色
const fontSize = ref(24); // 默认字体大小
const fontFamily = ref('Arial'); // 默认字体
let activeTextIndex = 0; // 当前选中的文本索引
const selectedObjectInfo = ref<any>(null); // 保存选中对象的信息

onMounted(() => {
  initCanvas();
});

watch(
  canvasData,
  () => {
    updateCanvas();
  },
  { deep: true },
);

const initCanvas = () => {
  const canvasElement = canvasRef.value;
  if (!canvasElement) return;
  fabric.Object.prototype.transparentCorners = false;

  canvas = new fabric.Canvas(canvasElement, {
    width: 750,
    height: 1500,
    selection: false,
    containerClass: 'canvas-container',
  });

  // 添加缩放功能
  canvas.on('mouse:wheel', (opt) => {
    const delta = opt.e.deltaY;
    let zoom = canvas!.getZoom();
    zoom *= 0.999 ** delta;
    if (zoom > 20) zoom = 20;
    if (zoom < 0.01) zoom = 0.01;
    canvas!.setZoom(zoom);
    opt.e.preventDefault();
    opt.e.stopPropagation();
  });

  // 获取对象并打印自定义 ID
  canvas.on('object:added', (e) => {
    const obj = e.target;
    console.log(`Added object with custom ID: ${obj['customId']}`);
  });

  setTimeout(() => {
    // const canvasElement = canvasRef.value;
    // canvasElement.width = 540;
    // canvasElement.height = 960;
    // canvas!.width = 540;
    // canvas!.height = 960;
    // canvas!.renderAll();
    // canvas!.setWidth(540);
    // canvas!.setHeight(960);
  }, 1000);

  updateCanvas();
};

const updateCanvas = () => {
  if (!canvas) return;

  canvas.clear();
  textObjects = []; // 清空文本对象引用

  /**
改进如下：
1. 选中对象的信息(类型\left\top\zoomX\zoomY\scaleX\scaleY\fill\borderColor\backgroundColor\宽度高度)， 要在输入框中显示, 改变时同时更新画布的信息

   */

  // 添加背景图片并保持比例
  if (canvasData.value.backgroundImage) {
    fabric.Image.fromURL(canvasData.value.backgroundImage).then((img) => {
      const canvasAspect = canvas!.width! / canvas!.height!;
      const imgAspect = img.width! / img.height!;

      if (canvasAspect >= imgAspect) {
        // 如果画布比较宽，则以高度为基准
        img.scaleToHeight(canvas!.height!);
      } else {
        // 否则以宽度为基准
        img.scaleToWidth(canvas!.width!);
      }

      img.set({
        selectable: false, // 禁止移动背景
        evented: true, // 禁止鼠标事件
      });

      canvas!.add(img);
      addQRCodeAndText();
    });
  } else {
    addQRCodeAndText();
  }
};

const addQRCodeAndText = () => {
  if (!canvas) return;

  // 添加二维码图片
  if (canvasData.value.qrCodeImage) {
    fabric.Image.fromURL(canvasData.value.qrCodeImage).then((img) => {
      img.set({
        left: 400,
        top: 300,
        width: 150,
        height: 150,
        hasControls: true, // 可控制
        hasBorders: true,
      });
      canvas!.add(img);
    });
  }

  // 添加文本
  canvasData.value.texts.forEach((item, index) => {
    const text = new fabric.Textbox(item.text, {
      left: item.left,
      top: item.top,
      fontSize: item.fontSize,
      fill: item.color, // 设置文本颜色
      fontFamily: item.fontFamily,
      // backgroundColor: '#f3f3f3',
      borderColor: '#000',
      hasControls: true, // 可控制
      hasBorders: true,
      evented: true, // 允许鼠标事件
      statefullCache: true,
    });
    canvas!.add(text);
    textObjects.push(text); // 保存文本对象

    // 设置当前选中文本索引
    text.on('selected', () => {
      activeTextIndex = index;
      selectedColor.value = text.fill as string;
      fontSize.value = text.fontSize!;
      fontFamily.value = text.fontFamily!;
      selectedObjectInfo.value = {
        type: '文本',
        left: text.left,
        top: text.top,
        width: text.width,
        height: text.height,
      };
    });

    text.setControlVisible('mt', false);
    text.setControlVisible('mb', false);
    text.setControlVisible('mr', false);
    text.setControlVisible('ml', false);
    text.setControlVisible('mtr', false);

    text.set('fill', item.color);

    text.on('editing:entered', (e) => {
      e.e.preventDefault();

      text.text = '+*';
      canvas!.renderAll();
      console.log('editing:entered', e);
    });

    text.on('editing:entered', (e) => {
      e.e.preventDefault();
      console.log('编辑文本框', e);
    });
  });

  const rect = new fabric.Rect({
    left: 100,
    top: 100,
    width: 60,
    height: 70,
    fill: '#000000',
    opacity: 0.5,
  });

  rect.setControlVisible('mt', false);
  rect.setControlVisible('mb', false);
  rect.setControlVisible('mr', false);
  rect.setControlVisible('ml', false);
  rect.setControlVisible('mtr', false);

  // 将自定义矩形添加到画布上
  canvas.add(rect);
  canvas.renderAll();
};

// 更新选中文本的颜色
const updateTextColor = () => {
  if (canvas && textObjects[activeTextIndex]) {
    const textObj = textObjects[activeTextIndex];
    textObj.set('fill', selectedColor.value); // 更新当前选中文本的颜色
    canvas.renderAll(); // 重新渲染画布
  }
};

// 更新选中文本的字体大小
const updateTextFontSize = () => {
  if (canvas && textObjects[activeTextIndex]) {
    const textObj = textObjects[activeTextIndex];
    textObj.set('fontSize', fontSize.value); // 更新字体大小
    canvas.renderAll();
  }
};

// 更新选中文本的字体
const updateTextFontFamily = () => {
  if (canvas && textObjects[activeTextIndex]) {
    const textObj = textObjects[activeTextIndex];
    textObj.set('fontFamily', fontFamily.value); // 更新字体
    canvas.renderAll();
  }
};

// 获取所有对象信息
const getAllObjectsInfo = () => {
  if (!canvas) return;

  const objects = canvas.getObjects();
  const objectInfo = objects.map((obj) => ({
    type: obj.type,
    left: obj.left,
    top: obj.top,
    width: obj.width,
    height: obj.height,
  }));

  console.log('画布对象信息:', objectInfo, objects);

  const dataURL = canvas.toDataURL();

  const blob = base64ToBlob(dataURL, 'image/png');
  const url = URL.createObjectURL(blob!);
  // 下载图片
  const a = document.createElement('a');
  a.href = url;
  a.target = '_blank';
  // a.download = '画布图片';
  a.click();
  console.log('画布图片:', blob, url);

  const json = canvas.toJSON();
  console.log('画布 json:', json);
};

const onFileChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  const files = target.files;
  if (files && files.length > 0) {
    const file = files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const result = event.target?.result as string;
      canvasData.value.backgroundImage = result; // 设置背景图片
    };

    reader.readAsDataURL(file);
  }
};
</script>

<style scoped>
canvas {
  border: 1px solid #000;
}
.canvas-container {
  transform: scale(0.5);
}
</style>

<style>
.canvas-container {
  transform: scale(0.5);
}
</style>

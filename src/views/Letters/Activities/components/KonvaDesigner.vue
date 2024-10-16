<template>
  <div>
    <v-stage ref="stage" :config="{ width: stageWidth, height: stageHeight }" class="stage">
      <v-layer ref="layer">
        <v-image v-for="(image, index) in images" :key="index" :config="image.config" draggable />
        <v-text
          v-for="(textItem, index) in texts"
          :key="index"
          :config="textItem.config"
          draggable
        />
      </v-layer>
    </v-stage>
    <button @click="submitToBackend">提交到后端</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const stageWidth = 800;
const stageHeight = 600;

const stage = ref(null);
const layer = ref(null);

const images = ref([
  {
    config: {
      x: 50,
      y: 50,
      width: 200,
      height: 200,
      src: 'path/to/image.jpg',
    },
  },
]);

const texts = ref([
  {
    config: {
      x: 100,
      y: 100,
      text: 'Hello World',
      fontSize: 24,
      fill: 'red',
      // draggable: true,
    },
  },
  {
    config: {
      x: 100,
      y: 200,
      text: 'Hello World',
      draggable: true,
      fontSize: 24,
      fill: 'black',
    },
  },
]);

const submitToBackend = () => {
  const json = stage.value.getStage().toJSON();
  console.log('json', json);
  // fetch('http://your-backend-url/api/generate-image', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: json,
  // })
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log('图片生成成功:', data);
  //   })
  //   .catch((error) => {
  //     console.error('图片生成失败:', error);
  //   });
};
</script>

<style>
.stage {
  background-color: bisque;
}
</style>

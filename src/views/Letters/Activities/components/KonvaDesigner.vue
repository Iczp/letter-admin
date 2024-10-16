<template>
  <div>
    <input type="file" @change="onFileChange" />
    <label for="textColor">选择文本颜色:</label>
    <input type="color" id="textColor" v-model="selectedColor" @input="updateTextColor" />

    <label for="fontSize">选择字体大小:</label>
    <input type="number" id="fontSize" v-model="fontSize" @input="updateTextFontSize" />

    <label for="fontFamily">选择字体:</label>
    <select id="fontFamily" v-model="fontFamily" @change="updateTextFontFamily">
      <option value="Arial">Arial</option>
      <option value="Helvetica">Helvetica</option>
      <option value="Courier">Courier</option>
      <option value="Times New Roman">Times New Roman</option>
    </select>
    <div ref="konvaContainer" style="width: 800px; height: 600px; background-color: #f0f0f0"></div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import Konva from 'konva';

export default {
  setup() {
    const konvaContainer = ref(null);
    let stage = null;
    let layer = null;
    let image = null;
    const texts = [];
    let rectangle = null;
    const selectedColor = ref('#000000');
    const fontSize = ref(20);
    const fontFamily = ref('Arial');

    onMounted(() => {
      stage = new Konva.Stage({
        container: konvaContainer.value,
        width: 800,
        height: 600,
      });
      layer = new Konva.Layer();
      stage.add(layer);

      // Initialize an empty image and a rectangle
      image = new Konva.Image({ x: 0, y: 0, width: 800, height: 600 });
      rectangle = new Konva.Rect({ x: 100, y: 100, width: 200, height: 200, fill: 'red' });
      layer.add(image);
      layer.add(rectangle);

      // Add three text objects
      for (let i = 0; i < 3; i++) {
        const text = new Konva.Text({
          x: 50 + i * 200,
          y: 50,
          text: `Text ${i + 1}`,
          fontSize: fontSize.value,
          fontFamily: fontFamily.value,
          fill: selectedColor.value,
        });
        texts.push(text);
        layer.add(text);
      }
    });

    const onFileChange = (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        image.image(e.target.result);
        layer.draw();
      };
      reader.readAsDataURL(file);
    };

    const updateTextColor = () => {
      texts.forEach((text) => {
        text.fill(selectedColor.value);
      });
      layer.draw();
    };

    const updateTextFontSize = () => {
      texts.forEach((text) => {
        text.fontSize(fontSize.value);
      });
      layer.draw();
    };

    const updateTextFontFamily = () => {
      texts.forEach((text) => {
        text.fontFamily(fontFamily.value);
      });
      layer.draw();
    };

    return {
      konvaContainer,
      selectedColor,
      fontSize,
      fontFamily,
      onFileChange,
      updateTextColor,
      updateTextFontSize,
      updateTextFontFamily,
    };
  },
};
</script>

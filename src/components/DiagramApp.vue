<template>
  <canvas ref="canvas" class="diagram"></canvas>
</template>

<script>
export default {
  name: "DiagramApp",
  mounted() {
    this.draw();
  },
  methods: {
    draw() {
      const element = this.$refs.canvas;
      const context = element.getContext("2d");
      // const xc = element.width / 2;
      // const yc = element.height / 2;
      // const options = {};
      // options.duration = 300;
      // options.colors = ["#414141", "#828282", "#8C6EAB", "#885ffc", "#48355B"];
      // options.step = this.getRadians(45);
      // options.start = this.getRadians(100);
      // options.width = 5;
      // options.r = xc - options.width;
      // let startColor = options.colors[i],
      //   endColor = options.colors[i + 1];
      //
      // let x0 = xc + Math.cos(options.start) * options.r,
      //   y0 = yc + Math.sin(options.start) * options.r,
      //   x1 = xc + Math.cos(options.start + options.step) * options.r,
      //   y1 = yc + Math.sin(options.start + options.step) * options.r;
      //
      // let gradient = context.createLinearGradient(x0, y0, x1, y1);
      // gradient.addColorStop(0, startColor);
      // gradient.addColorStop(1.0, endColor);
      //
      // let start = new Date().getTime();
      //
      // let fn = function () {};
      //
      // requestAnimationFrame(fn);
      // context.clearRect(0, 0, element.width, element.height);
      context.arc(200, 200, 150, 0, Math.PI, true);
      context.arc(400, 150, 150, 0, Math.PI, true);
      context.fillStyle = "red";
      context.stroke();
    },

    getRadians(degree) {
      return (Math.PI / 180) * degree;
    },
  },
};
</script>

<style scoped></style>

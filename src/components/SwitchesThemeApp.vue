<template>
  <div class="switcher-theme" @click="changeTheme">
    <span class="switcher-theme__purple switcher-options"></span>
    <span class="switcher-theme__blue switcher-options"></span>
    <span class="switcher-theme__red switcher-options"></span>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "SwitchesApp",
  emits: ["change"],
  data() {
    return {
      theme: "purple",
      width: null,
    };
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  unmounted() {
    window.removeEventListener("resize", this.handleResize);
  },
  watch: {
    width() {
      const displayWidth = 781;
      const switcher = document.querySelector(".switcher-theme");

      if (this.width < displayWidth) {
        const main = document.querySelector("#main");
        main.prepend(switcher);
      } else {
        const display = document.querySelector(".display");
        display.prepend(switcher);
      }
    },
  },
  methods: {
    changeTheme(event) {
      const element = event.target.classList;

      if (element.contains("switcher-theme__purple")) {
        this.theme = "purple";
      } else if (element.contains("switcher-theme__blue")) {
        this.theme = "blue";
      } else if (element.contains("switcher-theme__red")) {
        this.theme = "red";
      }
      this.$emit("change", this.theme);
    },
    handleResize() {
      this.width = window.innerWidth;
    },
  },
});
</script>

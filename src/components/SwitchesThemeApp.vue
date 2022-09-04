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
  data() {
    return {
      theme: "purple",
    };
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
  },
});
</script>

<style scoped></style>

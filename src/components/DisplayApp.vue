<template>
  <div class="display">
    <SwitchesApp @change="changeTheme"></SwitchesApp>
    <WeatherInfoApp></WeatherInfoApp>
  </div>
</template>

<script>
import WeatherInfoApp from "@/components/WeatherInfoApp";
import SwitchesApp from "@/components/SwitchesApp";

export default {
  name: "DisplayApp",
  components: { WeatherInfoApp, SwitchesApp },
  emits: ["changeTheme"],
  methods: {
    changeTheme(theme) {
      this.$emit("change", theme);
    },
  },
};
</script>

<style scoped></style>

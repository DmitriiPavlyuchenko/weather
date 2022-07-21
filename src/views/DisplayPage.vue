<template>
  <div class="display">
    <SwitchesApp></SwitchesApp>
    <WeatherInfoApp></WeatherInfoApp>
  </div>
</template>

<script>
import WeatherInfoApp from "@/components/WeatherInfoApp";
import SwitchesApp from "@/components/SwitchesApp";

export default {
  name: "DisplayPage",
  components: { WeatherInfoApp, SwitchesApp },
};
</script>

<style scoped></style>

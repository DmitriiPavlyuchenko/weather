<template>
  <section class="display">
    <SwitchesApp @change="changeTheme" />
    <WeatherInfoApp />
    <CitiesInfoApp />
  </section>
</template>

<script>
import WeatherInfoApp from "@/components/WeatherInfoApp";
import SwitchesApp from "@/components/SwitchesThemeApp";
import CitiesInfoApp from "@/components/CitiesInfoApp";

export default {
  components: { WeatherInfoApp, SwitchesApp, CitiesInfoApp },
  name: "DisplayApp",
  emits: ["change"],
  methods: {
    changeTheme(theme) {
      this.$emit("change", theme);
    },
  },
};
</script>

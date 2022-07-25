<template>
  <main class="weather">
    <div :class="theme" class="weather__container container">
      <DisplayApp @change="changeTheme"></DisplayApp>
      <MainApp></MainApp>
    </div>
  </main>
</template>

<script>
import DisplayApp from "@/components/DisplayApp";
import MainApp from "@/components/MainApp";

export default {
  name: "HomePage",
  components: { MainApp, DisplayApp },
  data() {
    return {
      theme: "purple",
    };
  },
  emits: ["changeTheme"],
  methods: {
    changeTheme(theme) {
      this.theme = theme;
    },
  },
};
</script>

<style></style>

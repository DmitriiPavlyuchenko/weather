<template>
  <div class="weather">
    <div :class="this.theme" class="weather__container container">
      <DisplayPage @change="changeTheme"></DisplayPage>
      <MainPage></MainPage>
    </div>
  </div>
</template>

<script>
import DisplayPage from "@/views/DisplayPage";
import MainPage from "@/views/MainPage";

export default {
  name: "HomePage",
  components: { MainPage, DisplayPage },
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

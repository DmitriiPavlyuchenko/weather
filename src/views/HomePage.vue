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
import { getItem, setItem } from "@/helpers/localStorage";
import { initValues } from "@/constants/values";

export default {
  name: "HomePage",
  components: { MainApp, DisplayApp },
  emits: ["changeTheme"],
  data() {
    return {
      theme: "",
    };
  },
  created() {
    this.isThemeInLocalStorage();
  },
  watch: {
    theme(newValue) {
      setItem(initValues.THEME, newValue);
    },
  },
  methods: {
    changeTheme(theme) {
      this.theme = theme;
    },
    isThemeInLocalStorage() {
      const currentTheme = getItem(initValues.THEME);
      if (typeof currentTheme === ("undefined" || "null")) {
        return (this.theme = initValues.DEFAULT_THEME_VALUE);
      } else {
        return (this.theme = currentTheme);
      }
    },
  },
};
</script>

<style></style>

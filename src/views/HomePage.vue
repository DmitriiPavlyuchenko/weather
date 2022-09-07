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
import { mapActions } from "vuex";

export default {
  name: "HomePage",
  components: { MainApp, DisplayApp },
  emits: ["changeTheme"],
  data() {
    return {
      theme: "",
    };
  },
  mounted() {
    this.isThemeInLocalStorage();
  },
  watch: {
    theme(newValue) {
      setItem(initValues.THEME, newValue);
    },
  },
  methods: {
    ...mapActions(["getCityWeather"]),
    changeTheme(theme) {
      this.theme = theme;
      setItem(initValues.THEME, this.theme);
    },
    isThemeInLocalStorage() {
      const currentTheme = getItem(initValues.THEME);
      const isCurrentThemeEmpty = Object.keys(currentTheme).length === 0;

      if (isCurrentThemeEmpty) {
        this.changeTheme(initValues.DEFAULT_THEME_VALUE);
      } else {
        this.changeTheme(currentTheme);
      }
    },
  },
};
</script>

<style></style>

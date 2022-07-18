<template>
  <form
    v-show="isOpen"
    :open="isOpen"
    action="#"
    class="search-form form"
    @submit.prevent
  >
    <InputBase
      v-model.capitalize="cityName"
      class="search-form__search-field input"
      placeholder="Введите город"
      type="text"
    ></InputBase>
    <ButtonBase
      class="search-form__search button"
      type="submit"
      @click="getCityWeather"
      ><img
        alt="Search"
        class="main__search"
        height="26"
        src="@/assets/img/icons/search.svg"
        width="25"
    /></ButtonBase>
  </form>
</template>

<script>
import { defineComponent } from "vue";
import { mapActions } from "pinia";
import { API } from "@/constants/api";
import weather from "@/store/weather";

export default defineComponent({
  name: "FormSearchApp",
  components: {},
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["closeForm"],
  data() {
    return {
      cityName: "",
    };
  },
  methods: {
    ...mapActions(weather, { requestCityWeather: "getCityWeather" }),
    closeForm() {
      this.$emit("closeForm", true);
    },
    async getCityWeather() {
      try {
        const cityName = this.cityName;
        const serverUrl = API.getWeatherPath;
        const URL = `${serverUrl}?q=${cityName}&appid=${API.apiKey}`;
        const result = await this.requestCityWeather(URL);
        console.log(result);
      } catch (e) {
        console.log(e);
      }
    },
  },
});
</script>

<style scoped></style>

<template>
  <form v-show="isOpen" class="search-form form" @submit.prevent>
    <InputBase
      v-model.capitalize="cityName"
      class="search-form__search-field"
      placeholder="Enter city..."
      type="text"
    ></InputBase>
    <ButtonBase
      :disabled="isCityNameEmpty"
      class="search-form__search"
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
import { mapActions } from "vuex";
import { API, SERVER_CODE } from "@/constants/api";
import { CURRENT_CITY, initValues } from "@/constants/values";
import { getJson } from "@/helpers/localStorage";

export default defineComponent({
  emits: ["closeForm"],
  name: "FormSearchApp",
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      cityName: "",
    };
  },
  created() {
    this.isCityInLocalStorage();
    this.getCityWeather();
  },
  computed: {
    isCityNameEmpty() {
      const oneSymbol = 1;
      return this.cityName.length <= oneSymbol;
    },
  },
  methods: {
    ...mapActions({ getCityWeather: "getCityWeather" }),
    closeForm() {
      this.$emit("closeForm", true);
    },
    async getCityWeather() {
      try {
        let cityName = this.cityName;
        const serverUrl = API.getWeatherPath;
        const URL = `${serverUrl}?q=${cityName}&appid=${API.apiKey}`;
        const result = await this.$store.dispatch("getCityWeather", URL);
        if (result.cod === SERVER_CODE.STATUS_SUCCESS) {
          this.cityName = "";
          this.closeForm();
        }
      } catch (e) {
        console.log(e);
      }
    },
    isCityInLocalStorage() {
      const currentCity = getJson(CURRENT_CITY);
      if (typeof currentCity === ("undefined" || "null")) {
        return (this.cityName = initValues.SAINT_PETERSBURG);
      } else {
        return (this.cityName = currentCity);
      }
    },
  },
});
</script>

<style scoped></style>

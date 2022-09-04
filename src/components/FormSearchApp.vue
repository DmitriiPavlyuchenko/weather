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
import { mapActions, mapState } from "vuex";
import { API, SERVER_CODE } from "@/constants/api";
import { initValues, LOCAL_STORAGE } from "@/constants/values";

export default defineComponent({
  name: "FormSearchApp",
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
    ...mapActions(["getCityWeather"]),
    ...mapState(["cities"]),
    closeForm() {
      this.$emit("closeForm", true);
    },
    async getCityWeather() {
      try {
        let cityName = this.cityName;
        const serverUrl = API.getWeatherPath;
        const URL = `${serverUrl}?q=${cityName}&appid=${API.apiKey}`;
        const result = await this.$store.dispatch("getCityWeather", {
          URL,
          cityName,
        });
        if (result.cod === SERVER_CODE.STATUS_SUCCESS) {
          this.cityName = "";
          this.closeForm();
        } else {
          throw new Error(result);
        }
      } catch (e) {
        console.log(e);
      }
    },
    isCityInLocalStorage() {
      const currentCity = localStorage.getItem(LOCAL_STORAGE.CURRENT_CITY);
      if (currentCity) {
        this.cityName = JSON.parse(currentCity);
      } else {
        this.cityName = initValues.SAINT_PETERSBURG;
      }
    },
  },
});
</script>

<style scoped></style>

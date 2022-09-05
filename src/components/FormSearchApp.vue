<template>
  <form v-show="isOpen" class="search-form form" @click.stop @submit.prevent>
    <InputBase
      v-model.capitalize="cityName"
      class="search-form__search-field"
      placeholder="Enter city..."
      type="text"
      @blur="closeForm"
    >
    </InputBase>
    <ButtonBase
      :disabled="isCityNameEmpty"
      class="search-form__search"
      type="submit"
      @click="getCityWeather(cityName)"
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
import { getItem } from "@/helpers/localStorage";
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
    // this.subscribeToUpdateWeather();
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
    async getCityWeather(city) {
      try {
        let cityName = city;
        const serverUrl = API.GET_WEATHER_PATH;
        const URL = `${serverUrl}?q=${cityName}&appid=${API.API_KEY}`;
        const response = await this.$store.dispatch("getCityWeather", {
          URL,
          cityName,
        });
        if (response.cod === SERVER_CODE.STATUS_SUCCESS) {
          this.cityName = "";
          this.closeForm();
        } else {
          throw new Error(response);
        }
      } catch (e) {
        console.log(e);
      }
    },
    isCityInLocalStorage() {
      const currentCity = getItem(LOCAL_STORAGE.CURRENT_CITY);
      const isCurrentCityEmpty = Object.keys(currentCity).length === 0;
      if (isCurrentCityEmpty) {
        this.getCityWeather(initValues.SAINT_PETERSBURG);
      } else {
        this.getCityWeather(currentCity);
      }
    },
    // subscribeToUpdateWeather() {
    //   const isCitiesInLs = getItem(LOCAL_STORAGE.CITIES);
    //   if (Object.keys(isCitiesInLs).length !== 0) {
    //     isCitiesInLs.forEach((city) => {
    //       this.getCityWeather(city.name);
    //     });
    //   }
    // },
  },
});
</script>

<style scoped></style>

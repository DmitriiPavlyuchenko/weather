<template>
  <div v-if="showPagination" class="pagination-block">
    <button
      :disabled="atHeadOfList"
      class="pagination__left pagination"
      @click="moveCarousel(-1)"
    ></button>
    <button
      :disabled="atEndOfList"
      class="pagination__right pagination"
      @click="moveCarousel(1)"
    ></button>
  </div>
  <div
    v-if="getCities.length > 0"
    :style="{ transform: scrollX }"
    class="cities-info"
  >
    <div
      v-for="(city, index) in getCities"
      :key="city.name"
      :class="{ 'cities-info__card_active': activeCity === index }"
      class="cities-info__card"
    >
      <span class="cities-info__degree"
        >{{ (city.main.temp - 273).toFixed()
        }}<span class="weather-info__degree-sign">°с</span></span
      >
      <img
        :alt="city.name"
        :src="
          'http://openweathermap.org/img/wn/' + city.weather[0].icon + '@2x.png'
        "
        class="cities-info__weather-icon"
      />
      <span class="cities-info__city">{{ city.name }}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { LOCAL_STORAGE } from "@/constants/values";
import { getItem } from "@/helpers/localStorage";

export default {
  name: "CitiesInfoApp",
  data() {
    return {
      activeCity: 0,
      currentOffSet: 0,
    };
  },
  mounted() {
    this.citiesInLocalStorage();
  },
  computed: {
    ...mapGetters(["fiveCities"]),
    getCities() {
      return this.$store.getters.fiveCities;
    },
    showPagination() {
      return this.getCities.length > 2;
    },
    atEndOfList() {
      return this.activeCity === this.getCities.length - 1;
    },
    atHeadOfList() {
      return this.activeCity === 0;
    },
    scrollX() {
      return "translateX" + "(" + this.currentOffSet + "px" + ")";
    },
  },
  methods: {
    moveCarousel(direction) {
      if (direction === 1 && !this.atEndOfList) {
        this.activeCity++;
        this.currentOffSet -= 150;
      } else if (direction === -1 && !this.atHeadOfList) {
        this.activeCity--;
        this.currentOffSet += 150;
      }
    },
    citiesInLocalStorage() {
      const cities = getItem(LOCAL_STORAGE.CITIES);
      if (cities) {
        this.$store.state.cities = cities;
      }
    },
  },
};
</script>

<style scoped></style>

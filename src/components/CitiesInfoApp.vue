<template>
  <div v-if="showPagination" class="arrows">
    <button
      :disabled="atHeadOfList"
      class="arrow__left arrow"
      @click="moveCarousel(-1)"
    ></button>
    <button
      :disabled="atEndOfList"
      class="arrow__right arrow"
      @click="moveCarousel(1)"
    ></button>
  </div>
  <div
    :style="{ transform: 'translateX' + '(' + currentOffSet + 'px' + ')' }"
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
        class="cities-info__weather-img"
      />
      <span class="cities-info__city-name">{{ city.name }}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { getJson } from "@/helpers/localStorage";
import { CITIES } from "@/constants/values";

export default {
  name: "CitiesInfoApp",
  data() {
    return {
      activeCity: 0,
      currentOffSet: 0,
    };
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
  },
  methods: {
    ...mapMutations(["citiesInLocalStorage"]),
    isCityInLs() {
      const cities = getJson(CITIES);
      if (cities) {
        return this.$store.commit("citiesInLocalStorage", cities);
      }
    },
    moveCarousel(direction) {
      if (direction === 1 && !this.atEndOfList) {
        this.activeCity++;
        this.currentOffSet -= 150;
      } else if (direction === -1 && !this.atHeadOfList) {
        this.activeCity--;
        this.currentOffSet += 150;
      }
    },
  },
};
</script>

<style scoped></style>

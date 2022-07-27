<template>
  <div class="cities-info">
    <div v-for="city in getCities" :key="city.name" class="cities-info__card">
      <span class="cities-info__degree"
        >{{ (city.main.temp - 273).toFixed()
        }}<span class="weather-info__degree-sign"> °с</span></span
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
import { mapGetters } from "vuex";

export default {
  name: "CitiesInfoApp",
  computed: {
    ...mapGetters(["fiveCities"]),
    getCities() {
      return this.$store.getters.fiveCities;
    },
  },
};
</script>

<style scoped></style>

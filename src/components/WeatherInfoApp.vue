<template>
  <div class="weather-info">
    <div class="weather-info__header">
      <span class="weather-info__degrees">
        {{ temperature }} <span class="weather-info__degree-sign">°с</span>
      </span>
      <img :src="icon" alt="Weather" class="weather-info__img" />
    </div>
    <div class="weather-info__body">
      <span class="weather-info__date">{{ convertDate }}</span>
      <div class="weather-info__description">
        <span class="weather-info__day">{{ convertDay }}</span>
        <span class="weather-info__trait">|</span>
        <span class="weather-info__time">{{ convertTime }}</span>
      </div>
    </div>
    <div class="weather-info__footer">
      <div class="weather-info__forecast">
        <i class="weather-info__icon icon-wind"></i>
        <span class="weather-info__title">Wind</span>
        <span class="weather-info__magnitude"> {{ wind }}km/h</span>
      </div>
      <span class="weather-info__trait">|</span>
      <div class="weather-info__forecast">
        <i class="weather-info__icon icon-hum"></i>
        <span class="weather-info__title">Hum</span>
        <span class="weather-info__magnitude"> {{ humidity }}%</span>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapState } from "vuex";
import { celsiusDegreeConversion } from "@/helpers/temperatureConvert";

export default defineComponent({
  name: "WeatherInfoApp",
  data() {
    return {
      currentDate: new Date(),
      temperature: "",
    };
  },
  computed: {
    ...mapState(["wind", "humidity", "temperatureWeather"]),
    wind() {
      return this.$store.state.wind;
    },
    humidity() {
      return this.$store.state.humidity;
    },
    convertDate() {
      return this.currentDate.toLocaleString().split(",").slice(0, 1).join();
    },
    convertDay() {
      return this.currentDate.toDateString().split(" ").slice(0, 1).join("");
    },
    convertTime() {
      return this.currentDate.toLocaleString().split(",").slice(1).join();
    },
    unixTemperature() {
      return this.$store.state.temperatureWeather;
    },
    icon() {
      return `http://openweathermap.org/img/wn/${this.$store.state.icon}@2x.png`;
    },
  },
  watch: {
    unixTemperature(newValue) {
      this.temperature = celsiusDegreeConversion(newValue);
    },
  },
});
</script>

<style scoped></style>

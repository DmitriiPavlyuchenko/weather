<template>
  <div class="day-period">
    <ClockApp :time="sunrise" :title="$options.SUNRISE"></ClockApp>
    <ClockApp :time="sunset" :title="$options.SUNSET"></ClockApp>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import ClockApp from "@/components/ClockApp";
import { CLOCK_TITLE } from "@/constants/clock";
import { mapState } from "vuex";
import { convertTime } from "@/helpers/unixConverter";

export default defineComponent({
  name: "DayPeriodApp",
  SUNRISE: CLOCK_TITLE.SUNRISE,
  SUNSET: CLOCK_TITLE.SUNSET,
  components: { ClockApp },
  data() {
    return {
      sunrise: "",
      sunset: "",
    };
  },
  computed: {
    ...mapState(["sunriseWeather", "sunsetWeather"]),
    setSunriseWeather() {
      return this.sunriseWeather;
    },
    setSunsetWeather() {
      return this.sunsetWeather;
    },
  },
  watch: {
    setSunriseWeather: {
      handler(newValue) {
        const time = convertTime(newValue);
        return (this.sunrise = time);
      },
    },
    setSunsetWeather: {
      handler(newValue) {
        const time = convertTime(newValue);
        return (this.sunset = time);
      },
    },
  },
});
</script>

<style scoped></style>

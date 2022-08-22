<template>
  <div class="day-period">
    <ClockApp :time="sunrise" :title="$options.SUNRISE"></ClockApp>
    <ClockApp :time="sunset" :title="$options.SUNSET"></ClockApp>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapState } from "vuex";
import ClockApp from "@/components/ClockApp";
import { convertTime } from "@/helpers/unixConverter";
import { CLOCK_TITLE } from "@/constants/clock";

export default defineComponent({
  SUNRISE: CLOCK_TITLE.SUNRISE,
  SUNSET: CLOCK_TITLE.SUNSET,
  components: { ClockApp },
  name: "DayPeriodApp",
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

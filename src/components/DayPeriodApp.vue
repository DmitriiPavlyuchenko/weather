<template>
  <div class="day-period">
    <ClockApp :time="cityData" :title="$options.SUNRISE"></ClockApp>
    <ClockApp :time="''" :title="$options.SUNSET"></ClockApp>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import ClockApp from "@/components/ClockApp";
import { CLOCK_TITLE } from "@/constants/clock";
import weather from "@/store/weather";
import { mapStores } from "pinia/dist/pinia";
import { convertTime } from "@/helpers/unixConverter";

export default defineComponent({
  name: "DayPeriodApp",
  SUNRISE: CLOCK_TITLE.SUNRISE,
  SUNSET: CLOCK_TITLE.SUNSET,
  components: { ClockApp },
  data() {
    return {};
  },
  computed: {
    ...mapStores(weather, { cityData: "weather" }),
    cityData() {
      return convertTime(this.cityData.sys.sunset);
    },
  },
});
</script>

<style scoped></style>

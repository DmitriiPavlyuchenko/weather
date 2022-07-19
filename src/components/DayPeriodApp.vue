<template>
  <div class="day-period">
    <ClockApp :title="$options.SUNRISE"></ClockApp>
    <ClockApp :is-golden-hour="true" :title="$options.GOLDEN_HOUR"></ClockApp>
    <ClockApp :title="$options.SUNSET"></ClockApp>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import ClockApp from "@/components/ClockApp";
import { CLOCK_TITLE } from "@/constants/clock";

export default defineComponent({
  name: "DayPeriodApp",
  SUNRISE: CLOCK_TITLE.SUNRISE,
  GOLDEN_HOUR: CLOCK_TITLE.GOLDEN_HOUR,
  SUNSET: CLOCK_TITLE.SUNSET,
  components: { ClockApp },
});
</script>

<style scoped></style>

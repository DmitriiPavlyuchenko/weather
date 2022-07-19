<template>
  <div class="day-period">
    <ClockApp></ClockApp>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import ClockApp from "@/components/ClockApp";

export default defineComponent({
  name: "DayPeriodApp",
  components: { ClockApp },
});
</script>

<style scoped></style>

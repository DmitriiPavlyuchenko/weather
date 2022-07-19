<template>
  <div class="clock">
    <h2 class="clock__title">Sunrise</h2>
    <div class="clock__wrapper">
      <div class="clock__arrows">
        <span class="clock__arrow"></span>
        <span class="clock__arrow"></span>
        <span class="clock__arrow"></span>
      </div>
      <div class="clock__timers">
        <span class="clock__time"></span>
        <span class="clock__time"></span>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ClockApp",
  props: {
    isGoldenClock: {
      type: Boolean,
    },
  },
});
</script>

<style scoped></style>

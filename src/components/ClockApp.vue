<template>
  <div class="clock">
    <h2 class="clock__title">{{ title }}</h2>
    <div
      :class="{ 'clock__wrapper_golden-hour': isGoldenHour }"
      class="clock__wrapper"
    >
      <div
        :class="{ 'clock__arrows_golden-hour': isGoldenHour }"
        class="clock__arrows"
      >
        <span
          :class="{ 'clock__arrow_purple-golden-hour': isGoldenHour }"
          class="clock__arrow clock__arrow_purple"
        ></span>
        <span
          :class="{ 'clock__arrow_white-golden-hour': isGoldenHour }"
          class="clock__arrow clock__arrow_white"
        ></span>
        <span
          :class="{ 'clock__arrow_brown-golden-hour': isGoldenHour }"
          class="clock__arrow clock__arrow_brown"
        ></span>
      </div>
      <div class="clock__timers">
        <span class="clock__timer clock__timer_big"
          >14:45
          <span v-show="isGoldenHour" class="clock__timer_am">am</span></span
        >
        <span class="clock__timer clock__timer_small"
          >22:08
          <span v-show="isGoldenHour" class="clock__timer_pm">pm</span></span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ClockApp",
  props: {
    title: {
      type: String,
      required: true,
    },
    isGoldenHour: {
      type: Boolean,
      required: false,
    },
  },
});
</script>

<style scoped></style>

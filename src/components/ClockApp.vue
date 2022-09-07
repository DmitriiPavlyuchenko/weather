<template>
  <div class="clock">
    <h2 class="clock__title">{{ title }}</h2>
    <div class="clock__wrapper">
      <div class="clock__arrows">
        <span class="clock__arrow clock__arrow_purple"></span>
        <span class="clock__arrow clock__arrow_white"></span>
        <span class="clock__arrow clock__arrow_brown"></span>
      </div>
      <div class="clock__timers">
        <span class="clock__timer clock__timer_big">{{ time }}</span>
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
    time: {
      type: String,
      required: true,
    },
  },
});
</script>

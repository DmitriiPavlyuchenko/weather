<template>
  <div v-show="!isOpen" class="city">
    <img
      alt="Map"
      class="city__map"
      height="35"
      src="@/assets/img/icons/map.svg"
      width="35"
    />
    <span class="city__name">Kek</span>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "CityApp",
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
});
</script>

<style scoped></style>

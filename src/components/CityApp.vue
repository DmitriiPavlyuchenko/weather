<template>
  <div v-show="!isOpen" class="city">
    <img
      alt="Map"
      class="city__map"
      height="35"
      src="@/assets/img/icons/map.svg"
      width="35"
    />
    <span class="city__name">{{ currentCity }}</span>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapState } from "pinia";
import weather from "@/store/weather";

export default defineComponent({
  data() {
    return {
      city: this.currentCity,
    };
  },
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  computed: { ...mapState(weather, { currentCity: "currentCity" }) },
});
</script>

<style scoped></style>

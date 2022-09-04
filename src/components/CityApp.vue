<template>
  <div v-show="!isOpen" class="city">
    <i class="city__map icon-map" />
    <span class="city__name">{{ cityWeather.name }}</span>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "CityApp",
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    ...mapGetters(["cityWeather"]),
  },
});
</script>

<style scoped></style>

<template>
  <div v-show="!isOpen" class="city">
    <i class="city__map icon-map" />
    <span class="city__name">{{ currentCity }}</span>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapState } from "vuex";

export default defineComponent({
  name: "CityApp",
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    ...mapState({ currentCity: "currentCity" }),
    currentCity() {
      return this.$store.state.currentCity;
    },
  },
});
</script>

<style scoped></style>

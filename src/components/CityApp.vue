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
import { mapState } from "vuex";

export default defineComponent({
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

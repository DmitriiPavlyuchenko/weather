<template>
  <div class="info-string">
    <span class="info-string__string">{{ description }}</span>
    <span class="info-string__info">i</span>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "InfoStringApp",
  computed: {
    ...mapGetters(["cityWeather"]),
    description() {
      return this.cityWeather.weather?.[0].description;
    },
  },
});
</script>

<style scoped></style>

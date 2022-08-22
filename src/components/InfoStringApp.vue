<template>
  <div class="info-string">
    <span class="info-string__string">{{ infoString }}</span>
    <button class="info-string__info">i</button>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "InfoStringApp",
  computed: {
    ...mapGetters(["capitalizeFirstLetter"]),
    infoString() {
      return this.$store.getters.capitalizeFirstLetter;
    },
  },
});
</script>

<style scoped></style>

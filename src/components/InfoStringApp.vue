<template>
  <div class="info-string">
    <span class="info-string__string">{{ description }}</span>
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
    description() {
      return this.$store.getters.capitalizeFirstLetter;
    },
  },
});
</script>

<style scoped></style>

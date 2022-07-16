<template>
  <FormSearchApp :isOpen="isFormOpen" @closeForm="closeForm"></FormSearchApp>
  <ButtonBase
    v-show="!isFormOpen"
    class="main__form-open button"
    type="button"
    @click="openForm"
  >
    <img
      alt="Search"
      class="main__search"
      height="26"
      src="@/assets/img/icons/search.svg"
      width="25"
    />
  </ButtonBase>
</template>

<script>
import { defineComponent } from "vue";
import FormSearchApp from "@/components/FormSearchApp.vue";
import ButtonBase from "@/components/ui/ButtonBase";

export default defineComponent({
  name: "HeaderApp",
  components: { ButtonBase, FormSearchApp },
  data() {
    return {
      isFormOpen: false,
    };
  },
  methods: {
    openForm() {
      this.isFormOpen = true;
    },
    closeForm() {
      this.isFormOpen = false;
    },
  },
});
</script>

<style scoped></style>

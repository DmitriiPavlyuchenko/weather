<template>
  <header class="header">
    <CityApp :isOpen="isFormOpen"></CityApp>
    <FormSearchApp :isOpen="isFormOpen" @closeForm="closeForm"></FormSearchApp>
    <ButtonBase
      v-show="!isFormOpen"
      class="header__form-open"
      type="button"
      @click="openForm"
    >
      <img
        alt="Search"
        class="header__search"
        height="26"
        src="@/assets/img/icons/search.svg"
        width="25"
      />
    </ButtonBase>
  </header>
</template>

<script>
import { defineComponent } from "vue";
import FormSearchApp from "@/components/FormSearchApp.vue";
import CityApp from "@/components/CityApp";

export default defineComponent({
  name: "HeaderApp",
  components: { FormSearchApp, CityApp },
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

<template>
  <form
    v-show="isOpen"
    :open="isOpen"
    action="#"
    class="search-form form"
    @submit.prevent
  >
    <InputBase
      v-model.capitalize="cityName"
      class="search-form__search-field input"
      placeholder="Введите город"
      type="text"
    ></InputBase>
    <ButtonBase
      class="search-form__search button"
      type="submit"
      @click="closeForm"
      ><img
        alt="Search"
        class="main__search"
        height="26"
        src="@/assets/img/icons/search.svg"
        width="25"
    /></ButtonBase>
  </form>
</template>

<script>
import { defineComponent } from "vue";
import { API } from "@/constants/api";

export default defineComponent({
  name: "FormSearchApp",
  components: {},
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["closeForm"],
  data() {
    return {
      cityName: "",
    };
  },
  methods: {
    closeForm() {
      this.$emit("closeForm", true);
    },
    getCityWeather() {
      const cityName = this.cityName;
      const URL = API.getWeatherPath;
    },
  },
});
</script>

<style scoped></style>

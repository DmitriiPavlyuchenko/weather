<template>
  <form action="#" class="search-form form" @submit.prevent>
    <InputBase
      v-model="inputValue"
      class="search-form__search-field input"
      placeholder="Введите город"
      type="text"
    ></InputBase>
    <ButtonBase class="search-form__search button" type="submit"
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

export default defineComponent({
  name: "FormSearchApp",
  components: {},

  data() {
    return {
      inputValue: "",
    };
  },
});
</script>

<style scoped></style>

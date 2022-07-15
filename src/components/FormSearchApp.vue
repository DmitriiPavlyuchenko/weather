<template>
  <form action="#" class="search-form form" @submit.prevent>
    <InputBase
      v-model="inputValue"
      placeholder="Введите город"
      type="text"
    ></InputBase>
    <ButtonBase class="search-form__search button"></ButtonBase>
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

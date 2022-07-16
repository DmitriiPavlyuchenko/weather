<template>
  <form
    v-show="isOpen"
    :open="isOpen"
    action="#"
    class="search-form form"
    @submit.prevent
  >
    <InputBase
      v-model="inputValue"
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
      inputValue: "",
    };
  },
  methods: {
    closeForm() {
      this.$emit("closeForm", true);
    },
  },
});
</script>

<style scoped></style>

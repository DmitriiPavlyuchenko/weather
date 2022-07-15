<template>
  <div class="main">
    <FormSearchApp></FormSearchApp>
    <ButtonBase class="main__form-open button" type="button">
      <img
        alt="Search"
        class="main__search"
        height="26"
        src="@/assets/img/icons/search.svg"
        width="25"
      />
    </ButtonBase>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import FormSearchApp from "@/components/FormSearchApp.vue";

export default defineComponent({
  name: "MainPage",
  components: { FormSearchApp },
});
</script>

<style scoped></style>

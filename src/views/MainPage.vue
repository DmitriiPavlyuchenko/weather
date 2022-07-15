<template>
  <div class="main">
    <FormSearchApp></FormSearchApp>
    <ButtonBase class="main__form-open button"></ButtonBase>
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

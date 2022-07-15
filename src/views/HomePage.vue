<template>
  <div class="weather">
    <div class="weather__container container">
      <DisplayPage></DisplayPage>
      <MainPage></MainPage>
    </div>
  </div>
</template>

<script>
import DisplayPage from "@/views/DisplayPage";
import MainPage from "@/views/MainPage";

export default {
  name: "HomePage",
  components: { MainPage, DisplayPage },
};
</script>

<style></style>

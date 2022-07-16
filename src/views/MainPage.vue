<template>
  <div class="main">
    <header class="main__header header">
      <HeaderApp></HeaderApp>
    </header>
  </div>
</template>

<script>
import HeaderApp from "@/components/HeaderApp";

export default {
  name: "MainPage",
  components: { HeaderApp },
};
</script>
<style scoped></style>

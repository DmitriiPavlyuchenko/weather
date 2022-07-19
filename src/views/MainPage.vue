<template>
  <div class="main">
    <HeaderApp></HeaderApp>
    <DayPeriodApp></DayPeriodApp>
  </div>
</template>

<script>
import HeaderApp from "@/components/HeaderApp";
import DayPeriodApp from "@/components/DayPeriodApp";

export default {
  name: "MainPage",
  components: { HeaderApp, DayPeriodApp },
};
</script>
<style scoped></style>

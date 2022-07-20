<template>
  <div class="main">
    <HeaderApp></HeaderApp>
    <DayPeriodApp></DayPeriodApp>
    <InfoStringApp></InfoStringApp>
  </div>
</template>

<script>
import HeaderApp from "@/components/HeaderApp";
import DayPeriodApp from "@/components/DayPeriodApp";
import InfoStringApp from "@/components/InfoStringApp";

export default {
  name: "MainPage",
  components: { InfoStringApp, HeaderApp, DayPeriodApp },
};
</script>
<style scoped></style>

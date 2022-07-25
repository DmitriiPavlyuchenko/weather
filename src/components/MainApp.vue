<template>
  <section class="main">
    <HeaderApp></HeaderApp>
    <DayPeriodApp></DayPeriodApp>
    <InfoStringApp></InfoStringApp>
    <TemperatureApp></TemperatureApp>
  </section>
</template>

<script>
import HeaderApp from "@/components/HeaderApp";
import DayPeriodApp from "@/components/DayPeriodApp";
import InfoStringApp from "@/components/InfoStringApp";
import TemperatureApp from "@/components/TemperatureApp";

export default {
  name: "MainApp",
  components: { InfoStringApp, HeaderApp, DayPeriodApp, TemperatureApp },
};
</script>
<style scoped></style>

<template>
  <section id="main" class="main">
    <HeaderApp></HeaderApp>
    <DayPeriodApp></DayPeriodApp>
    <InfoStringApp></InfoStringApp>
  </section>
</template>

<script>
import HeaderApp from "@/components/HeaderApp";
import DayPeriodApp from "@/components/DayPeriodApp";
import InfoStringApp from "@/components/InfoStringApp";

export default {
  components: { InfoStringApp, HeaderApp, DayPeriodApp },
  name: "MainApp",
};
</script>

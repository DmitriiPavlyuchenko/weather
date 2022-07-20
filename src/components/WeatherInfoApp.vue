<template>
  <div class="weather-info">
    <div class="weather-info__header">
      <span class="weather-info__degrees"></span>
      <img alt="" class="weather-info__img" src="" />
    </div>
    <div class="weather-info__body">
      <span class="weather-info__date"></span>
      <div class="weather-info__description">
        <span class="weather-info__day"></span>
        <span class="weather-info__time"></span>
      </div>
    </div>
    <div class="weather-info__footer">
      <div class="weather-info__wind">
        <i class="weather-info__icon"></i>
        <span class="weather-info__title"></span>
        <span class="weather-info__magnitude"></span>
      </div>
      <div class="weather-info__hum">
        <i class="weather-info__icon"></i>
        <span class="weather-info__title"></span>
        <span class="weather-info__magnitude"></span>
      </div>
      <div class="weather-info__rain">
        <i class="weather-info__icon"></i>
        <span class="weather-info__title"></span>
        <span class="weather-info__magnitude"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WeatherInfoApp",
};
</script>

<style scoped></style>

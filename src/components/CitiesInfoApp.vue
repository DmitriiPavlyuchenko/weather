<template>
  <ul :style="[listPosition, listLength]" class="cities-info">
    <li
      v-for="city in getCities"
      :key="city.name"
      ref="city"
      class="cities-info__card"
      @click="setActive(city)"
    >
      <span class="cities-info__degree"
        >{{ (city.main.temp - 273).toFixed()
        }}<span class="weather-info__degree-sign">°с</span></span
      >
      <img
        :alt="city.name"
        :src="
          'http://openweathermap.org/img/wn/' + city.weather[0].icon + '@2x.png'
        "
        class="cities-info__weather-icon"
      />
      <span class="cities-info__city">{{ city.name }}</span>
      <button
        class="cities-info__delete"
        type="button"
        @click.stop="deleteCity(city)"
      >
        x
      </button>
    </li>
  </ul>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import { LOCAL_STORAGE } from "@/constants/values";
import { getItem, setItem } from "@/helpers/localStorage";
import { DEFAULT_ERROR_TOAST_CONFIG } from "@/constants/toast";

export default {
  name: "CitiesInfoApp",
  data() {
    return {
      activeCity: 0,
      currentOffSet: 0,
      touch: {
        isDragging: false,
        startPos: 0,
        currentTranslate: 0,
        prevTranslate: 0,
        currentIndex: 0,
      },
    };
  },
  mounted() {
    this.citiesInLocalStorage();

    this.$el.addEventListener("dragstart", (event) => event.preventDefault());

    this.$el.addEventListener("touchstart", (event) => this.touchStart(event));
    this.$el.addEventListener("touchmove", (event) => this.touchMove(event));
    this.$el.addEventListener("touchend", (event) => this.touchEnd(event));

    this.$el.addEventListener("mousedown", (event) => this.touchStart(event));
    this.$el.addEventListener("mouseup", (event) => this.touchEnd(event));
    this.$el.addEventListener("mousemove", (event) => this.touchMove(event));
    this.$el.addEventListener("mouseleave", (event) => this.touchEnd(event));
  },
  beforeUnmount() {
    this.$el.removeEventListener("dragstart", (event) =>
      event.preventDefault()
    );

    this.$el.removeEventListener("touchstart", (event) =>
      this.touchStart(event)
    );
    this.$el.removeEventListener("touchmove", (event) => this.touchMove(event));
    this.$el.removeEventListener("touchend", (event) => this.touchEnd(event));

    this.$el.removeEventListener("mousedown", (event) =>
      this.touchStart(event)
    );
    this.$el.removeEventListener("mouseup", (event) => this.touchEnd(event));
    this.$el.removeEventListener("mousemove", (event) => this.touchMove(event));
    this.$el.removeEventListener("mouseleave", (event) => this.touchEnd(event));
  },
  computed: {
    ...mapGetters(["cities"]),
    listPosition() {
      return {
        transform: "translateX(" + this.touch.currentTranslate + "px)",
      };
    },
    listLength() {
      const cardWith = 200;
      const space = 28;
      return {
        width:
          this.cities.length * cardWith +
          (this.cities.length - 1) * space +
          "px",
      };
    },
    getCities() {
      return this.cities;
    },
  },
  methods: {
    ...mapMutations(["SET_CITIES", "SET_CITY_WEATHER"]),
    ...mapActions(["getCityWeather"]),
    getPositionX(event) {
      return event.type.includes("mouse")
        ? event.pageX
        : event.touches[0].clientX;
    },
    touchStart(event) {
      this.touch.startPos =
        this.getPositionX(event) - this.touch.currentTranslate;
      this.touch.isDragging = true;
    },
    touchMove(event) {
      if (this.touch.isDragging) {
        const currentPosition = this.getPositionX(event);
        this.touch.currentTranslate = currentPosition - this.touch.startPos;
      }
    },
    touchEnd() {
      this.touch.isDragging = false;
      const width = parseInt(this.listLength.width);
      const startSliderWidth = 0;
      const elementWidth = 228;
      if (this.touch.currentTranslate > startSliderWidth) {
        this.touch.currentTranslate = startSliderWidth;
      } else if (this.touch.currentTranslate < -width + elementWidth) {
        this.touch.currentTranslate =
          -width + this.cities.length + elementWidth;
      }
    },
    citiesInLocalStorage() {
      const cities = getItem(LOCAL_STORAGE.CITIES);
      if (cities) {
        this.$store.commit("SET_CITIES", cities);
      }
    },
    deleteCity(city) {
      const cities = this.cities;
      const updateCities = cities.filter((item) => item !== city);
      this.$store.commit("SET_CITIES", updateCities);
      setItem("cities", updateCities);
      this.$toast.show(`City ${city.name} removed`, DEFAULT_ERROR_TOAST_CONFIG);
    },
    setActive(city) {
      this.$store.commit("SET_CITY_WEATHER", city);
    },
  },
};
</script>

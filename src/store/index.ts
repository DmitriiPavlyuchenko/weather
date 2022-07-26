import { createStore } from "vuex";
import { RootStore } from "@/interfaces/store/root";
import { getCityWeather } from "@/api/weather";
import { CityWeather, Response } from "@/interfaces/response";
import { SERVER_CODE } from "@/constants/api";
import { setJson } from "@/helpers/localStorage";
import { CITIES, CURRENT_CITY } from "@/constants/values";

export default createStore({
  state: (): RootStore => {
    return {
      currentCity: "",
      cities: [],
      sunriseWeather: null,
      sunsetWeather: null,
      temperatureWeather: null,
      humidity: null,
      wind: null,
      icon: null,
    };
  },
  mutations: {
    setCurrentCity(state: RootStore, payload: string) {
      state.currentCity = payload;
    },
    setCity(state: RootStore, payload: string) {
      state.cities.push(payload);
    },
    setSunrise(state: RootStore, payload: number | null) {
      state.sunriseWeather = payload;
    },
    setSunset(state: RootStore, payload: number | null) {
      state.sunsetWeather = payload;
    },
    setTemperature(state: RootStore, payload: number | null) {
      state.temperatureWeather = payload;
    },
    setHumidity(state: RootStore, payload: number | null) {
      state.humidity = payload;
    },
    setWind(state: RootStore, payload: number | null) {
      state.wind = payload;
    },
    setIcon(state: RootStore, payload: string | null) {
      state.icon = payload;
    },
  },
  actions: {
    async getCityWeather(context, URL: string): Promise<object | unknown> {
      try {
        const request = (await getCityWeather(URL)) as Response;
        const result = (await request.json()) as CityWeather;
        const cityName = result.name;
        if (request.status === SERVER_CODE.STATUS_SUCCESS) {
          setJson(CURRENT_CITY, cityName);
          setJson(CITIES, result);
          context.commit("setCurrentCity", cityName);
          context.commit("setCity", cityName);
          context.commit("setSunrise", result.sys.sunrise);
          context.commit("setSunset", result.sys.sunset);
          context.commit("setTemperature", result.main.temp);
          context.commit("setHumidity", result.main.humidity);
          context.commit("setWind", result.wind.speed);
          context.commit("setIcon", result.weather["0"].icon);
          return result;
        }
      } catch (error: unknown) {
        const result = error;
        return result;
      }
    },
  },
});

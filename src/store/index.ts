import { createStore } from "vuex";
import { IRootStore } from "@/interfaces/store/root";
import { getCityWeather } from "@/api/weather";
import { ICityWeather, IPromise } from "@/interfaces/response";
import { SERVER_CODE } from "@/constants/api";

export default createStore({
  state: (): IRootStore => {
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
    setCurrentCity(state: IRootStore, payload: string) {
      state.currentCity = payload;
    },
    setCity(state: IRootStore, payload: string) {
      state.cities.push(payload);
    },
    setSunrise(state: IRootStore, payload: number | null) {
      state.sunriseWeather = payload;
    },
    setSunset(state: IRootStore, payload: number | null) {
      state.sunsetWeather = payload;
    },
    setTemperature(state: IRootStore, payload: number | null) {
      state.temperatureWeather = payload;
    },
    setHumidity(state: IRootStore, payload: number | null) {
      state.humidity = payload;
    },
    setWind(state: IRootStore, payload: number | null) {
      state.wind = payload;
    },
    setIcon(state: IRootStore, payload: string | null) {
      state.icon = payload;
    },
  },
  actions: {
    async getCityWeather(context, URL: string): Promise<object | unknown> {
      try {
        const request = (await getCityWeather(URL)) as IPromise;
        const result = (await request.json()) as ICityWeather;
        const cityName = result.name;
        if (request.status === SERVER_CODE.STATUS_SUCCESS) {
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

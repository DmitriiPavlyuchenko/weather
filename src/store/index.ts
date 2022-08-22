import { createStore } from "vuex";
import { RootStore } from "@/interfaces/store/root";
import { getCityWeather } from "@/api/weather";
import { CityWeather, Response } from "@/interfaces/response";
import { SERVER_CODE } from "@/constants/api";
import { setItem } from "@/helpers/localStorage";
import { LOCAL_STORAGE } from "@/constants/values";

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
      infoString: null,
    };
  },
  getters: {
    fiveCities(state) {
      const cityCount = 5;
      if (state.cities.length > cityCount) {
        return state.cities.slice(0, 5);
      }
      return state.cities;
    },
    capitalizeFirstLetter(state: RootStore) {
      const letter = state.infoString;
      if (letter) {
        return letter.slice(0, 1).toUpperCase() + letter.slice(1);
      }
    },
    wind(state: RootStore) {
      const wind = state.wind;
      if (wind) {
        return wind.toFixed();
      }
    },
    icon(state: RootStore) {
      const icon = state.icon;
      if (icon) {
        return `http://openweathermap.org/img/wn/${icon}@2x.png`;
      }
    },
  },
  mutations: {
    setCurrentCity(state: RootStore, payload: string) {
      state.currentCity = payload;
    },
    setCity(state: RootStore, payload: string) {
      state.cities.unshift(payload);
    },
    citiesInLocalStorage(state: RootStore, payload: []) {
      state.cities = payload;
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
    setDescription(state: RootStore, payload: string) {
      state.infoString = payload;
    },
  },
  actions: {
    async getCityWeather(context, URL: string): Promise<object | unknown> {
      try {
        const request = (await getCityWeather(URL)) as Response;
        const result = (await request.json()) as CityWeather;
        const cityName = result.name;
        if (request.status === SERVER_CODE.STATUS_SUCCESS) {
          context.commit("setCurrentCity", cityName);
          context.commit("setCity", result);
          context.commit("setSunrise", result.sys.sunrise);
          context.commit("setSunset", result.sys.sunset);
          context.commit("setTemperature", result.main.temp);
          context.commit("setHumidity", result.main.humidity);
          context.commit("setWind", result.wind.speed);
          context.commit("setIcon", result.weather["0"].icon);
          context.commit("setDescription", result.weather["0"].description);
          setItem(LOCAL_STORAGE.CURRENT_CITY, cityName);
          setItem(LOCAL_STORAGE.CITIES, context.getters.fiveCities);
          return result;
        }
      } catch (error: unknown) {
        const result = error;
        return result;
      }
    },
  },
});

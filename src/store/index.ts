import { createStore } from "vuex";
import { RootStore } from "@/interfaces/store/root";
import { getCityWeather } from "@/api/weather";
import { CityData, CityWeather, Response } from "@/interfaces/response";
import { SERVER_CODE } from "@/constants/api";
import { getItem, setItem } from "@/helpers/localStorage";
import { LOCAL_STORAGE } from "@/constants/values";

export default createStore({
  state: (): RootStore => {
    return {
      cityWeather: {},
      cities: [],
    };
  },
  getters: {
    cityWeather(state) {
      return state.cityWeather;
    },
    fiveCities(state) {
      const cityCount = 5;
      if (state.cities.length > cityCount) {
        return state.cities.slice(0, 5);
      }
      return state.cities;
    },
  },
  mutations: {
    SET_CITY_WEATHER(state: RootStore, payload) {
      state.cityWeather = payload;
      state.cities.unshift(payload);
    },
  },
  actions: {
    async getCityWeather(context, data: CityData): Promise<object | unknown> {
      try {
        const storage = getItem("cities");
        const isCityInStore = storage
          .map((element) => element.name)
          .includes(data.cityName);
        if (isCityInStore) {
          return "This city in storage";
        }
        const request = (await getCityWeather(data.URL)) as Response;
        const result = (await request.json()) as CityWeather;
        if (request.status === SERVER_CODE.STATUS_SUCCESS) {
          const cityName = result.name;
          context.commit("SET_CITY_WEATHER", result);
          setItem(LOCAL_STORAGE.CURRENT_CITY, cityName);
          setItem(LOCAL_STORAGE.CITIES, context.getters.fiveCities);
          return result;
        }
      } catch (error) {
        const result = error;
        return result;
      }
    },
  },
});

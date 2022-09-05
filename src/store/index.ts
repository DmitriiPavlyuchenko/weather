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
    },
    SET_CITY(state: RootStore, payload) {
      state.cities = [...state.cities, payload];
    },
  },
  actions: {
    async getCityWeather(context, data: CityData): Promise<object | unknown> {
      try {
        const isCityInStorage = await context.dispatch(
          "isCityInStorage",
          data.cityName
        );
        const request = (await getCityWeather(data.URL)) as Response;
        const response = (await request.json()) as CityWeather;
        if (request.status === SERVER_CODE.STATUS_SUCCESS) {
          const cityName = response.name;
          if (!isCityInStorage) {
            context.commit("SET_CITY", response);
            setItem(LOCAL_STORAGE.CURRENT_CITY, cityName);
            setItem(LOCAL_STORAGE.CITIES, context.getters.fiveCities);
          }
          context.commit("SET_CITY_WEATHER", response);
          return response;
        }
      } catch (error) {
        const result = error;
        return result;
      }
    },
    isCityInStorage(context, cityName): boolean {
      const storage = getItem("cities");
      let isCityInStorage;
      if (Array.isArray(storage)) {
        isCityInStorage = storage
          .map((element) => element.name)
          .includes(cityName);
      }
      return isCityInStorage;
    },
  },
});

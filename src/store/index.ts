import { createStore } from "vuex";
import { RootStore } from "@/interfaces/store/root";
import { CityWeather } from "@/interfaces/response";
import { getItem, setItem } from "@/helpers/localStorage";
import { LOCAL_STORAGE } from "@/constants/values";
import { API, SERVER_CODE } from "@/constants/api";
import { getCityWeather } from "@/api/weather";

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
    cities(state) {
      return state.cities;
    },
  },
  mutations: {
    SET_CITY_WEATHER(state, payload) {
      state.cityWeather = payload;
    },
    SET_CITY(state, payload) {
      state.cities = [payload, ...state.cities];
    },
    SET_CITIES(state, payload) {
      state.cities = payload;
    },
  },
  actions: {
    async getCityWeather(
      context,
      city: string
    ): Promise<CityWeather | unknown> {
      try {
        const isCityInStorage = await context.dispatch("isCityInStorage", city);
        const serverUrl = API.GET_WEATHER_PATH;
        const URL = `${serverUrl}?q=${city}&appid=${API.API_KEY}`;
        const request = (await getCityWeather(URL)) as Response;
        const response = (await request.json()) as CityWeather;

        if (request.status === SERVER_CODE.CODE_200) {
          const cityName = response.name;
          if (!isCityInStorage) {
            context.commit("SET_CITY", response);
            setItem(LOCAL_STORAGE.CURRENT_CITY, cityName);
            setItem(LOCAL_STORAGE.CITIES, context.getters.cities);
          }
          context.commit("SET_CITY_WEATHER", response);
        }
        return response;
      } catch (error) {
        return error;
      }
    },
    isCityInStorage(context, cityName: string): boolean {
      const citiesInStorage = getItem("cities");
      let isCityInStorage;

      if (Array.isArray(citiesInStorage)) {
        isCityInStorage = citiesInStorage
          .map((city) => city.name)
          .includes(cityName);
      }
      return isCityInStorage;
    },
  },
});

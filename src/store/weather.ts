import { defineStore } from "pinia";
import { getCityWeather } from "@/api/weather";
import { IWeather } from "@/interfaces/store/weather";
import { ICityWeather, IPromise } from "@/interfaces/response";
import { SERVER_CODE } from "@/constants/api";

export default defineStore("weather", {
  state: (): IWeather => {
    return {
      currentCity: "Saint-Petersburg",
      cities: [],
    };
  },
  getters: {},
  actions: {
    async getCityWeather(URL: string): Promise<object | unknown> {
      try {
        const request = (await getCityWeather(URL)) as IPromise;
        const result = (await request.json()) as ICityWeather;
        const cityName = result.name;
        if (request.status === SERVER_CODE.STATUS_SUCCESS) {
          this.currentCity = cityName;
          this.cities.push(cityName);
          return result;
        }
      } catch (error: unknown) {
        const result = error;
        return result;
      }
    },
  },
});

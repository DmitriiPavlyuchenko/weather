import { defineStore } from "pinia";
import { IWeather } from "@/interfaces/store/weather";
import { getCityWeather } from "@/api/weather";

export default defineStore("weather", {
  state: (): IWeather => {
    return {
      currentCity: "",
      cities: [],
    };
  },
  getters: {},
  actions: {
    async getCityWeather(URL: string): Promise<object | unknown> {
      try {
        const result = await getCityWeather(URL);
        return result;
      } catch (error: unknown) {
        const result = error;
        return result;
      }
    },
  },
});

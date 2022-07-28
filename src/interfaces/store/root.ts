export interface RootStore {
  currentCity: string;
  cities: string[];
  sunriseWeather: null | number;
  sunsetWeather: null | number;
  temperatureWeather: null | number;
  humidity: null | number;
  wind: null | number;
  icon: null | string;
  description: null | string;
}

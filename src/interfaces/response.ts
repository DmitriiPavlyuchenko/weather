export interface IPromise {
  status: number;
  data: {
    name: string;
  };

  json(): Promise<object>;
}

export interface ICityWeather {
  name: string;
  sys: {
    sunrise: number;
    sunset: number;
  };
  main: {
    temp: number;
    humidity: number;
    pressure: number;
  };
  wind: {
    speed: number;
  };
}

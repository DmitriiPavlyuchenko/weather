export interface Response {
  status: number;
  data: {
    name: string;
  };

  json(): Promise<object>;
}

export interface CityWeather {
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
  weather: {
    0: {
      icon: string;
      description: string;
    };
  };
}

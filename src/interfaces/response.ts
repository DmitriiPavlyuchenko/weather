export interface Response {
  status: number;
  data: {
    name: string;
  };

  json(): Promise<object>;
}

export interface CityWeather {
  name: string;
}

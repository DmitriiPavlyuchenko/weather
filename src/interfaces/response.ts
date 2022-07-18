export interface IPromise {
  status: number;
  data: {
    name: string;
  };

  json(): Promise<object>;
}

export interface ICityWeather {
  name: string;
}

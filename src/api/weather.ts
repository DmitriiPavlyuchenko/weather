export const getCityWeather = async (URL: string): Promise<object> => {
  return await fetch(URL);
};

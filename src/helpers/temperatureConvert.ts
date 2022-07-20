import { TO_CELSIUS } from "@/constants/values";

export const celsiusDegreeConversion = (temperature: number): number => {
  const celsiusDegree = Math.ceil(temperature - TO_CELSIUS);
  return celsiusDegree;
};

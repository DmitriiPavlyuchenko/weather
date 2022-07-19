export const convertTime = (time: number): string => {
  const date = new Date(time * 1000);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return hours + ":" + minutes;
};

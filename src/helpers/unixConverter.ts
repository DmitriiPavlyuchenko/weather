export const convertTime = (time: number): string => {
  const date = new Date(time * 1000);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const result = addZeroToDate(hours) + ":" + addZeroToDate(minutes);
  return result;
};

const addZeroToDate = (time: number): string | number => {
  const tenHour = 10;
  if (time < tenHour) {
    const convertTime = "0" + time.toString();
    return convertTime;
  }
  return time;
};

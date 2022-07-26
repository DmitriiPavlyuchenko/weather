export const setJson = (key: string, value: string | object): void => {
  try {
    const json = JSON.stringify(value);
    localStorage.setItem(key, json);
  } catch {
    return;
  }
};

export const getJson = (key: string): string | void => {
  try {
    const json = localStorage.getItem(key);
    if (json !== null) {
      return JSON.parse(json);
    }
  } catch {
    return;
  }
};

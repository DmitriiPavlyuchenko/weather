export const getItem = (key: string): unknown => {
  try {
    return JSON.parse(localStorage.getItem(key) || "{}");
  } catch (e) {
    console.log("Error getting data in LS");
    return;
  }
};

export const setItem = (key: string, data: unknown): void => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.log("Error saving data in LS");
  }
};

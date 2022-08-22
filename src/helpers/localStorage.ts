export const getItem = (key: string) => {
  try {
    return JSON.parse(localStorage.getItem(key) || "{}");
  } catch (e) {
    console.log("Error getting daya in LS");
    return null;
  }
};

export const setItem = (key: string, data: unknown) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.log("Error saving daya in LS");
  }
};

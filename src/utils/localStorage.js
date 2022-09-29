const setBreakInStorage = (value) => {
  localStorage.setItem("activity-break", value);
};

const getBreakFromStorage = () => {
  return localStorage.getItem("activity-break");
};

const clearStorage = () => {
  localStorage.removeItem("activity-break");
};

export { setBreakInStorage, getBreakFromStorage, clearStorage };

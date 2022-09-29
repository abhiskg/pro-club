const setBreakInStorage = (value) => {
  localStorage.setItem("break-time", value);
};

const getBreakFromStorage = () => {
  return localStorage.getItem("break-time");
};

const getActivityFromStorage = () => {
  const storedActivity = localStorage.getItem("activity-list");
  if (storedActivity) {
    return JSON.parse(storedActivity);
  } else {
    return {};
  }
};

const setActivityInStorage = (id) => {
  const activityList = getActivityFromStorage();

  const quantity = activityList[id];

  if (!quantity) {
    activityList[id] = 1;
  } else {
    activityList[id] = activityList[id] + 1;
  }

  localStorage.setItem("activity-list", JSON.stringify(activityList));
};

const clearStorage = () => {
  localStorage.removeItem("break-time");
  localStorage.removeItem("activity-list");
};

export {
  setBreakInStorage,
  getBreakFromStorage,
  getActivityFromStorage,
  setActivityInStorage,
  clearStorage,
};

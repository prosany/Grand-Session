const setLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
  return true;
};

const getLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  if (!data) return [];
  return JSON.parse(data);
};

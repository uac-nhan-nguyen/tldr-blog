export const getLocalStorageJson = <T>(key: string, init: T): T | null => {
  const text = localStorage.getItem(key);
  if (!text) return init;
  const data = JSON.parse(text);
  if (data == null) return init;
  return {
    ...init,
    ...data,
  }
}

export const setLocalStorageJson = (key: string, data: object) => {
  localStorage.setItem(key, JSON.stringify(data));
}
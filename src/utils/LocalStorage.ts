export const getLocalStorageJson = <T>(key: string, init: T): T | null => {
  const text = localStorage.getItem(key);
  if (!text) return null;
  const data = JSON.parse(text);
  if (data == null) return null;
  return {
    ...init,
    ...data,
  }
}

export const setLocalStorageJson = (key: string, data: object) => {
  localStorage.setItem(key, JSON.stringify(data));
}
export const getLocalStorageJson = <T>(key: string, init: T, mutate?: (T) => T): T | null => {
  const text = localStorage.getItem(key);
  if (!text) return init;
  const data = JSON.parse(text);
  if (data == null) return init;
  let ans = {
    ...init,
    ...data,
  }
  if (mutate != null) ans = mutate(ans);
  return ans;
}

export const setLocalStorageJson = (key: string, data: object) => {
  localStorage.setItem(key, JSON.stringify(data));
}
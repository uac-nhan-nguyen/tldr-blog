import { writable, type Writable } from "svelte/store";

export const getLocalStorageJson = <T>(key: string, init: T, mutate?: (T) => T): T | null => {
  const text = localStorage.getItem(key);
  if (!text) return init;

  try {
    const data = JSON.parse(text);

    if (data == null) return init;
    let ans = {
      ...init,
      ...data,
    }
    if (mutate != null) ans = mutate(ans);
    return ans;
  }
  catch (e) {
    return text as T;
  }
}

export const setLocalStorageJson = <T>(key: string, data: T) => {
  if (typeof data === 'string') {
    localStorage.setItem(key, data);
  }
  else {
    localStorage.setItem(key, JSON.stringify(data));
  }
}

const sharedVariable: {
  [k: string]: Writable<any>,
} = {}

export const useLocalStorage = <T>(key: string, initialValue: T): Writable<T> => {
  if (sharedVariable[key]) return sharedVariable[key];

  let value = initialValue
  value = getLocalStorageJson<T>(key, initialValue);

  const w = writable(value);
  w.subscribe((value) => {
    setLocalStorageJson(key, value)
  })
  return sharedVariable[key] = w;
}
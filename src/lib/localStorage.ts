export function getLocalStorageKey<T>(key: string): T | undefined {
  const data = window.localStorage.getItem(key);

  try {
    return data ? JSON.parse(data) : undefined;
  } catch {
    return undefined;
  }
}

export function setLocalStorageKey<T>(key: string, body: T) {
  window.localStorage.setItem(key, JSON.stringify(body));
}

export function removeLocalStorageKey(key: string) {
  window.localStorage.removeItem(key);
}

export function clearLocalStorage() {
  window.localStorage.clear();
}

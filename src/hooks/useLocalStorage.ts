import { useState, useEffect, useCallback } from "react";

function useLocalStorage(key: string, initialValue?: any) {
  const [value, set] = useState(() => {
    if (initialValue === undefined) {
      try {
        const storedValue: string | null = localStorage.getItem(key);
        if (storedValue !== null && storedValue !== "undefined") {
          return JSON.parse(storedValue);
        }
        return undefined;
      } catch (error) {
        console.error("Could not load item from local storage", error);
        return undefined;
      }
    }
  });

  useEffect(() => {
    try {
      let finalValue = value;
      if (typeof value !== "string") {
        finalValue = JSON.stringify(value);
      }
      localStorage.setItem(key, finalValue);
    } catch (error) {
      console.error(`Could not save value for key ${key}`, error);
    }
  }, [key, value]);

  const clearValue = useCallback(() => {
    localStorage.removeItem(key);
  }, [key]);

  return [value, set, clearValue];
}

export default useLocalStorage;

import { useEffect, useState } from "react";

export default function useLocalStorage(storageKey, initialValue) {
  const stored = localStorage.getItem(storageKey);

  const [storedValue, setStoredValue] = useState(
    stored !== null ? JSON.parse(stored) : initialValue
  );

  const updateStoredValue = (newValue) => {
    setStoredValue(newValue);
    localStorage.setItem(storageKey, JSON.stringify(newValue));
  };

  useEffect(() => {
    window.addEventListener("storage", (event) => {
      const stored = localStorage.getItem(storageKey);
      setStoredValue(JSON.parse(stored));
    });
  }, []);

  return [storedValue, updateStoredValue];
}

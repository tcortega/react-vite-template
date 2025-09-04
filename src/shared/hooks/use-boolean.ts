import { useCallback, useState } from "react";

interface UseBooleanReturn {
  value: boolean;
  on: () => void;
  off: () => void;
  toggle: () => void;
  set: (value: boolean) => void;
}

export function useBoolean(defaultValue = false): UseBooleanReturn {
  const [value, setValue] = useState(defaultValue);

  const on = useCallback(() => setValue(true), []);
  const off = useCallback(() => setValue(false), []);
  const toggle = useCallback(() => setValue((prev) => !prev), []);
  const set = useCallback((value: boolean) => setValue(value), []);

  return {
    value,
    on,
    off,
    toggle,
    set,
  };
}

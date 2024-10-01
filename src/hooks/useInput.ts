import { useCallback, useState } from "react";

function useInput(initialValue: string) {
  // value
  const [value, setValue] = useState(initialValue);
  const bind = {
    value, // "value" : value,
    onChange: useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    }, []),
  };

  // reset
  const reset = useCallback(() => setValue(initialValue), [initialValue]);

  // return
  return { bind, setValue, reset };
}

export default useInput;

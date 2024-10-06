import React, { useCallback, useRef, useState } from "react";

function useInput<
  T extends HTMLInputElement | HTMLTextAreaElement = HTMLInputElement
>(initialValue: string) {
  // value
  const [value, setValue] = useState(initialValue);

  // onChange
  const onChange = useCallback((e: React.ChangeEvent<T>) => {
    setValue(e.target.value);
  }, []);

  // reset
  const reset = useCallback(() => setValue(initialValue), [initialValue]);

  // current cursor
  const insertRef = useRef<T | null>(null);
  const insertAtCursor = useCallback(
    (text: string) => {
      if (insertRef.current) {
        const element = insertRef.current;
        const startPos = element.selectionStart ?? 0;
        const endPos = element.selectionEnd ?? 0;

        const updatedValue =
          value.slice(0, startPos) + text + value.slice(endPos);
        setValue(updatedValue);

        // 삽입 후 커서 위치 이동
        setTimeout(() => {
          element.setSelectionRange(
            startPos + text.length,
            startPos + text.length
          );
        }, 0);
      }
    },
    [value]
  );

  // return
  return {
    bind: { value, onChange },
    setValue,
    reset,
    insertRef,
    insertAtCursor,
  };
}

export default useInput;

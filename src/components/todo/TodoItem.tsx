import { useState } from "react";
import { FaCheck } from "react-icons/fa6";

export type TodoItemType = {
  id: string;
  text: string;
  status: "active" | "completed";
};
export default function TodoItem({ id, text, status }: TodoItemType) {
  const [isChecked, setIsChecked] = useState<boolean>(status === "completed");
  const handleCheck = () => {
    setIsChecked((prev) => !prev);
  };
  return (
    <li>
      <input
        type="checkbox"
        id={id}
        className="hidden"
        onChange={handleCheck}
        checked={isChecked}
      />
      <label
        htmlFor={id}
        className="inline-flex gap-2 cursor-pointer items-center"
      >
        <span
          className={`flex items-center justify-center border border-brand w-5 h-5 rounded-full box-border ${
            isChecked ? "bg-brand" : ""
          }`}
        >
          {isChecked && <FaCheck className="absolute text-xs text-white" />}
        </span>
        <strong className="font-normal">{text}</strong>
      </label>
    </li>
  );
}

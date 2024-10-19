import { useState } from "react";
import { FaCheck, FaPencil } from "react-icons/fa6";
import useModal from "../../hooks/useModal";
import TodoInputModal from "./TodoInputModal";
import { updateTodo } from "../../api/todoApi";

export type Status = "active" | "completed";
export type TodoItemType = {
  id: string;
  text: string;
  status: Status;
  createdAt?: string;
  date?: string;
};
type TodoItemProps = {
  item: TodoItemType;
  mode?: "pending" | "future";
};
export default function TodoItem({ item, mode }: TodoItemProps) {
  const [isChecked, setIsChecked] = useState<boolean>(
    item.status === "completed"
  );
  const { isOpen, openModal, closeModal } = useModal();

  const handleCheck = async () => {
    const newStatus = item.status === "completed" ? "active" : "completed"; // 상태를 반대로 전환
    setIsChecked(newStatus === "completed"); // 새로운 상태에 따라 isChecked 업데이트
    updateTodo(item.id, { status: newStatus });
  };

  return (
    <div className="flex items-center justify-between">
      <div>
        <input
          type="checkbox"
          id={item.id}
          className="hidden"
          onChange={handleCheck}
          checked={isChecked}
        />
        <label
          htmlFor={item.id}
          className="inline-flex gap-2 cursor-pointer items-center"
        >
          <span
            className={`flex items-center justify-center border border-brand w-5 h-5 rounded-full box-border ${
              isChecked ? "bg-brand" : ""
            }`}
          >
            {isChecked && <FaCheck className="absolute text-xs text-white" />}
          </span>
          <strong className="font-normal">{item.text}</strong>
        </label>
      </div>
      {mode === "future" && (
        <button onClick={openModal}>
          <FaPencil className="text-xs" />
        </button>
      )}

      {isOpen && (
        <TodoInputModal
          mode="update"
          isFormOpen={isOpen}
          closeForm={closeModal}
          editItem={item}
        />
      )}
    </div>
  );
}

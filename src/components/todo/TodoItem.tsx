import { useState } from "react";
import { FaCheck, FaPencil } from "react-icons/fa6";
import useModal from "../../hooks/useModal";
import TodoInputModal from "./TodoInputModal";
import { updateTodo } from "../../api/todoApi";
import { useMutation } from "react-query";

export type Status = "active" | "completed";
export type TodoItemType = {
  id: string;
  text: string;
  status: Status;
  createdAt?: string;
  date?: string;
};
export type TodoItemProps = {
  item: TodoItemType;
  mode?: "pending" | "future";
  setDraggingItem?: (item: TodoItemType | null) => void; // 드래그 중인 아이템 설정 함수
};
export default function TodoItem({
  item,
  mode,
  setDraggingItem,
}: TodoItemProps) {
  const [isChecked, setIsChecked] = useState<boolean>(
    item.status === "completed"
  );

  const { isOpen, openModal, closeModal } = useModal();

  // Mutation for updating the todo item
  const mutation = useMutation(
    (newStatus: Status) => updateTodo(item.id, { status: newStatus }),
    {
      onError: () => {
        // 만약 에러가 발생하면 UI 상태를 롤백하거나 사용자에게 오류 알림
        setIsChecked(item.status === "completed"); // 상태 롤백
      },
    }
  );

  const handleCheck = async () => {
    const newStatus = isChecked ? "active" : "completed"; // 반대 상태로 전환
    setIsChecked(!isChecked); // UI 먼저 업데이트 (낙관적 업데이트)

    // 서버에 상태 업데이트 요청
    mutation.mutate(newStatus);
  };

  const handleDrag = (event: "start" | "end") => {
    if (mode === "pending" && setDraggingItem) {
      event === "start" && setDraggingItem(item);
      event === "end" && setDraggingItem(null);
    }
  };

  return (
    <div
      draggable={mode === "pending"}
      onDragStart={() => handleDrag("start")}
      onDragEnd={() => handleDrag("end")}
      className="flex items-center justify-between"
    >
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
            className={`flex items-center justify-center border border-brand w-5 h-5 rounded-full box-border dark:border-dangerDark ${
              isChecked ? "bg-brand dark:bg-brandDark" : ""
            }`}
          >
            {isChecked && (
              <FaCheck className="absolute text-xs text-white dark:text-slate-800" />
            )}
          </span>
          <strong className="font-normal">{item.text}</strong>
        </label>
      </div>
      {!mode && (
        <button onClick={openModal}>
          <FaPencil className="text-xs text-brand dark:text-brandDark" />
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

import { FaRegCalendarAlt, FaRegTrashAlt } from "react-icons/fa";
import { IoPaperPlane } from "react-icons/io5";
import useModal from "../../hooks/useModal";
import { useCalendarContext } from "../../context/CalendarContext";
import { useCalendar } from "../../hooks/useCalendar";
import { v4 as uuidv4 } from "uuid";
import { Status, TodoItemType } from "./TodoItem";
import { useQueryClient } from "react-query";
import useInput from "../../hooks/useInput";
import { useEffect } from "react";
import CalendarModal from "./CalendarModal";
import { addTodo, deleteTodo, updateTodo } from "../../api/todoApi";

export type TodoInputFormProps = {
  closeForm: () => void;
  mode?: "create" | "update";
  editItem?: TodoItemType;
};
export default function TodoInputForm({
  closeForm,
  mode = "create",
  editItem,
}: TodoInputFormProps) {
  const { selectedDate, setSelectedDate } = useCalendarContext();
  const { today } = useCalendar();
  const { isOpen, closeModal, openModal } = useModal();
  const date = selectedDate === today ? "오늘" : selectedDate;
  const queryClient = useQueryClient();
  const { bind, setValue } = useInput("");
  // update mode
  useEffect(() => {
    if (mode === "update" && editItem) {
      const { text, date } = editItem;
      setValue(text);
      setSelectedDate(date as string);
    }
  }, [mode, editItem, setValue, setSelectedDate]);

  // items CUD
  const invalidateTodos = () => {
    queryClient.invalidateQueries("todos");
  };

  const createTodoItems = (text: string) => ({
    id: uuidv4(),
    text,
    status: "active" as Status,
    createdAt: new Date().toISOString(),
  });
  const handleForm = async () => {
    const text = bind.value;
    const item = createTodoItems(text);

    if (mode === "update" && editItem) {
      await updateTodo(editItem.id, { text: bind.value, date: selectedDate });
    } else {
      await addTodo(item, selectedDate);
    }
    invalidateTodos();
    closeForm();
  };
  const handleDelete = async () => {
    if (editItem) {
      await deleteTodo(editItem.id); // 비동기 삭제 완료 대기
    }
    invalidateTodos();
    closeForm();
  };

  return (
    <div className="w-11/12 mx-auto">
      {editItem && (
        <button
          className="absolute -top-11 right-2 bg-red-500 p-2 rounded-md text-white"
          onClick={handleDelete}
        >
          <FaRegTrashAlt />
        </button>
      )}
      <input
        {...bind}
        className="w-full border-b outline-none  border-brand dark:bg-slate-600 dark:border-brandDark"
        type="text"
      />
      <div className="flex mt-3 items-center justify-between text-brand dark:text-brandDark">
        <button onClick={openModal} className="flex items-center gap-2">
          <FaRegCalendarAlt />
          <span>{date}</span>
        </button>
        <button onClick={handleForm} className="handleForm">
          <IoPaperPlane />
        </button>
      </div>
      <CalendarModal isCalOpen={isOpen} calClose={closeModal} />
    </div>
  );
}

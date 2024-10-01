import { FaRegCalendarAlt } from "react-icons/fa";
import { IoPaperPlane } from "react-icons/io5";
import Modal from "../common/Layouts/Modal";
import useModal from "../../hooks/useModal";
import { useCalendarContext } from "../../context/CalendarContext";
import Calendar from "../common/calendar/Calendar";
import { useCalendar } from "../../hooks/useCalendar";
import { v4 as uuidv4 } from "uuid";
import { Status } from "./TodoItem";
import { addTodo } from "../../api/addTodo";
import { useQueryClient } from "react-query";
import useInput from "../../hooks/useInput";

type TodoInputFormProps = { closeForm: () => void };
export default function TodoInputForm({ closeForm }: TodoInputFormProps) {
  const { selectedDate } = useCalendarContext();
  const { today } = useCalendar();
  const { isOpen, closeModal, openModal } = useModal();
  const date = selectedDate === today ? "오늘" : selectedDate;
  const queryClient = useQueryClient();
  const { bind, setValue, reset } = useInput("");
  const handleForm = () => {
    const item = {
      id: uuidv4(),
      text: bind.value,
      status: "active" as Status,
      createdAt: new Date().toISOString(),
    };
    addTodo(item, today);
    queryClient.invalidateQueries("todos");
    closeForm();
  };

  return (
    <div className="w-11/12 mx-auto">
      <input
        {...bind}
        className="w-full border-b outline-none  border-brand"
        type="text"
      />
      <div className="flex mt-3 items-center justify-between text-brand">
        <button onClick={openModal} className="flex items-center gap-2">
          <FaRegCalendarAlt />
          <span>{date}</span>
        </button>
        <button onClick={handleForm} className="handleForm">
          <IoPaperPlane />
        </button>
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <Calendar />
        <div className="text-right">
          <button onClick={closeModal}>확인</button>
        </div>
      </Modal>
    </div>
  );
}

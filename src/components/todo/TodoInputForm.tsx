import { FaRegCalendarAlt } from "react-icons/fa";
import { IoPaperPlane } from "react-icons/io5";
import Modal from "../common/Layouts/Modal";
import useModal from "../../hooks/useModal";
import { useCalendarContext } from "../../context/CalendarContext";
import Calendar from "../common/calendar/Calendar";
import { useCalendar } from "../../hooks/useCalendar";

export default function TodoInputForm() {
  const { selectedDate } = useCalendarContext();
  const { today } = useCalendar();
  const { isOpen, closeModal, openModal } = useModal();
  const date = selectedDate === today ? "오늘" : selectedDate;

  return (
    <div className="w-11/12 mx-auto">
      <input
        className="w-full border-b outline-none  border-brand"
        type="text"
      />
      <div className="flex mt-3 items-center justify-between text-brand">
        <button onClick={openModal} className="flex items-center gap-2">
          <FaRegCalendarAlt />
          <span>{date}</span>
        </button>
        <button>
          <IoPaperPlane />
        </button>
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <Calendar />
        <div className="text-right">
          <button>확인</button>
        </div>
      </Modal>
    </div>
  );
}

import Modal from "../common/Layouts/Modal";
import Calendar from "../common/calendar/Calendar";

type CalendarModalProps = {
  isCalOpen: boolean;
  calClose: () => void;
};
export default function CalendarModal({
  isCalOpen,
  calClose,
}: CalendarModalProps) {
  return (
    <Modal isOpen={isCalOpen} closeModal={calClose}>
      <Calendar />
      <div className="text-right">
        <button onClick={calClose}>확인</button>
      </div>
    </Modal>
  );
}

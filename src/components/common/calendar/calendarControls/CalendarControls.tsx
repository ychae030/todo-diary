import useModal from "../../../../hooks/useModal";
import Modal from "../../Layouts/Modal";
import CalendarMonth, { CalendarMonthType } from "./CalendarMonth";
import CalendarYear from "./CalendarYear";
import MonthModal, { MonthModalProps } from "./MonthModal";

type CalendarControlsProps = Omit<MonthModalProps, "closeModal"> &
  CalendarMonthType;

export default function CalendarControls({
  currentYear,
  currentMonth,
  goToday,
  goToPrevMonth,
  goToNextMonth,
  goToMonth,
  goToNextYear,
  goToPrevYear,
}: CalendarControlsProps) {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <CalendarYear currentYear={currentYear} openModal={openModal} />
      <CalendarMonth
        currentMonth={currentMonth}
        goToPrevMonth={goToPrevMonth}
        goToNextMonth={goToNextMonth}
        openModal={openModal}
        goToday={goToday}
      />
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <MonthModal
          currentYear={currentYear}
          currentMonth={currentMonth}
          goToPrevYear={goToPrevYear}
          goToNextYear={goToNextYear}
          goToMonth={goToMonth}
          closeModal={closeModal}
        />
      </Modal>
    </>
  );
}

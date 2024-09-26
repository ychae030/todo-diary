import useModal from "../../../hooks/useModal";
import Modal from "../../common/Layouts/Modal";
import MonthModal, { MonthModalProps } from "./MonthModal";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

type CalendarControlsProps = Omit<MonthModalProps, "onClose"> & {
  currentMonth: string;
  goToPrevMonth: () => void;
  goToNextMonth: () => void;
};

export default function CalendarControls({
  currentYear,
  currentMonth,
  goToNextMonth,
  goToPrevMonth,
  goToMonth,
  goToNextYear,
  goToPrevYear,
}: CalendarControlsProps) {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <div>
        <button
          className="text-lg"
          onClick={openModal}
          aria-label="원하는 연도, 월 선택 가능한 모달 오픈"
        >
          {currentYear}
        </button>
        <div className="flex justify-around">
          <button onClick={goToPrevMonth} aria-label="이전 달로 이동합니다">
            <IoIosArrowBack />
          </button>
          <button onClick={openModal} className="text-2xl">
            {currentMonth}월
          </button>
          <button onClick={goToNextMonth} aria-label="다음 달로 이동합니다">
            <IoIosArrowForward />
          </button>
        </div>
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <MonthModal
          currentYear={currentYear}
          currentMonth={currentMonth}
          goToPrevYear={goToPrevYear}
          goToNextYear={goToNextYear}
          goToMonth={goToMonth}
          onClose={closeModal}
        />
      </Modal>
    </>
  );
}

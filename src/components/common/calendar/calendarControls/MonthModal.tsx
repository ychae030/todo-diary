import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export type MonthModalProps = {
  currentYear: number;
  currentMonth: string;
  goToNextYear: () => void;
  goToPrevYear: () => void;
  goToMonth: (month: number) => void;
  closeModal: () => void;
};
export default function MonthModal({
  currentYear,
  currentMonth,
  goToNextYear,
  goToPrevYear,
  goToMonth,
  closeModal,
}: MonthModalProps) {
  const month = Array(12).fill("");
  const handleMonth = (month: number) => {
    goToMonth(month);
    closeModal();
  };
  return (
    <>
      <div className="flex justify-around mb-5">
        <button onClick={goToPrevYear} aria-label="이전 연도로 이동합니다.">
          <IoIosArrowBack />
        </button>
        <h2>{currentYear}</h2>
        <button onClick={goToNextYear} aria-label="다음 연도로 이동합니다.">
          <IoIosArrowForward />
        </button>
      </div>
      <div className="grid grid-cols-3 gap-y-1">
        {month.map((_, i) => (
          <span key={i}>
            <button
              className={
                i + 1 === Number(currentMonth) ? "activeNum" : "inactiveNum"
              }
              onClick={() => handleMonth(i)}
            >
              {i + 1}
            </button>
          </span>
        ))}
      </div>
    </>
  );
}

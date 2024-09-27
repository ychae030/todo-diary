import React from "react";
import { useCalendarContext } from "../../../../context/CalendarContext";
type CalendarYearType = {
  openModal: () => void;
  currentYear: number;
};
export default function CalendarYear({
  openModal,
  currentYear,
}: CalendarYearType) {
  const { mode } = useCalendarContext();

  return (
    <div className="text-lg">
      {mode === "diary" ? (
        <button
          onClick={openModal}
          aria-label="원하는 연도, 월 선택 가능한 모달 오픈"
        >
          {currentYear}
        </button>
      ) : (
        <span>{currentYear}</span>
      )}
    </div>
  );
}

import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useCalendarContext } from "../../../../context/CalendarContext";

export type CalendarMonthType = {
  currentMonth: string;
  goToday?: () => void;
  goToPrevMonth: () => void;
  goToNextMonth: () => void;
  openModal?: () => void;
};

export default function CalendarMonth({
  currentMonth,
  goToday,
  goToPrevMonth,
  goToNextMonth,
  openModal,
}: CalendarMonthType) {
  const { mode } = useCalendarContext();
  return (
    <div className="flex justify-around">
      <button onClick={goToPrevMonth} aria-label="이전 달로 이동합니다">
        <IoIosArrowBack />
      </button>
      <button
        onClick={mode === "diary" ? openModal : goToday}
        className="text-2xl"
      >
        {currentMonth}월
      </button>
      <button onClick={goToNextMonth} aria-label="다음 달로 이동합니다">
        <IoIosArrowForward />
      </button>
    </div>
  );
}

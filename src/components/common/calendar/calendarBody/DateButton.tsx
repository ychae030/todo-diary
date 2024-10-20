import { useNavigate } from "react-router-dom";
import { useCalendarContext } from "../../../../context/CalendarContext";
import { Days } from "../../../../hooks/useCalendar";
import { emoji } from "../../../../images/emoji";

type DateButtonProps = Pick<Days, "date" | "day" | "isToday"> & {
  isNotCurrentMonth: boolean;
  isAfterToday: boolean;
  isBeforeToday: boolean;
};

export default function DateButton({
  date,
  day,
  isToday,
  isNotCurrentMonth,
  isAfterToday,
  isBeforeToday,
}: DateButtonProps) {
  const { handleDateClick, disablePastDates, selectedDate, mode, diaryData } =
    useCalendarContext();
  const disabled = disablePastDates ? isBeforeToday : isAfterToday;
  const navigate = useNavigate();

  if (mode === "diary") {
    // diaryData에서 date와 일치하는 항목 찾기
    const matchedDiary = diaryData?.find((diary) => diary.date === date);

    // 일치하는 항목이 있는 경우 이모지 버튼 렌더링
    if (matchedDiary) {
      return (
        <button
          key={matchedDiary.date}
          className={
            selectedDate === date && !matchedDiary ? "activeNum" : "inactiveNum"
          }
          disabled={disabled || isNotCurrentMonth}
          onClick={() => navigate(`/diary/detail/${date}`)}
        >
          <img src={emoji[matchedDiary.mood]} alt="" />
        </button>
      );
    }

    // 일치하는 항목이 없는 경우 기본 버튼 렌더링
    return (
      <button
        className={selectedDate === date ? "activeNum" : "inactiveNum"}
        onClick={() => handleDateClick(date)}
        disabled={disabled || isNotCurrentMonth}
      >
        {day}
      </button>
    );
  }

  return (
    <button
      className={selectedDate === date ? "activeNum" : "inactiveNum"}
      onClick={() => handleDateClick(date)}
      disabled={disabled || isNotCurrentMonth}
    >
      {day}
    </button>
  );
}

import { useCalendarContext } from "../../../../context/CalendarContext";
import { Days } from "../../../../hooks/useCalendar";

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
  const { handleDateClick, disablePastDates, selectedDate, mode, showIcons } =
    useCalendarContext();
  const disabled = disablePastDates ? isBeforeToday : isAfterToday;
  const buttonCssClass =
    mode === "diary" && isToday
      ? "activeNum"
      : mode === "todo" && selectedDate === date
      ? "activeNum"
      : "inactiveNum";
  return (
    <td className={isNotCurrentMonth ? "opacity-0" : "py-2"}>
      <button
        className={buttonCssClass}
        onClick={() => handleDateClick(date)}
        disabled={disabled || isNotCurrentMonth}
      >
        {day}
      </button>
    </td>
  );
}

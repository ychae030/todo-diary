import { Days } from "../../../hooks/useCalendar";

type DateButtonProps = Pick<Days, "date" | "day" | "isToday"> & {
  isNotCurrentMonth: boolean;
  isAfterToday: boolean;
  onClick: (date: string) => void;
};

export default function DateButton({
  date,
  day,
  isToday,
  isNotCurrentMonth,
  isAfterToday,
  onClick,
}: DateButtonProps) {
  return (
    <td className={isNotCurrentMonth ? "opacity-0" : "py-2"}>
      <button
        className={isToday ? "activeNum" : "inactiveNum"}
        onClick={() => onClick(date)}
        disabled={isNotCurrentMonth || isAfterToday}
      >
        {day}
      </button>
    </td>
  );
}

import { isAfter, isBefore } from "date-fns";
import { Days } from "../../../../hooks/useCalendar";
import DateButton from "./DateButton";
import { useMemo } from "react";

type CalendarBodyProps = {
  currentMonth: string;
  getDate: () => Days[][];
  today: string;
};

export default function CalendarBody({
  currentMonth,
  getDate,
  today,
}: CalendarBodyProps) {
  const weeks = useMemo(() => getDate(), [getDate]);
  return (
    <tbody>
      {weeks.map((week, i) => (
        <tr key={i} className="py-4">
          {week.map(({ date, day, isToday, month }) => {
            const isNotCurrentMonth = month !== currentMonth; // 이번 달에 해당하는 일만 찾아줌
            const isAfterToday = isAfter(date, today); // 오늘 보다 뒤의 날짜
            const isBeforeToday = isBefore(date, today);
            return (
              <td
                key={date}
                className={isNotCurrentMonth ? "opacity-0" : "py-2"}
              >
                <DateButton
                  date={date}
                  day={day}
                  isToday={isToday}
                  isNotCurrentMonth={isNotCurrentMonth}
                  isAfterToday={isAfterToday}
                  isBeforeToday={isBeforeToday}
                />
              </td>
            );
          })}
        </tr>
      ))}
    </tbody>
  );
}

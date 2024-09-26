import { isAfter } from "date-fns";
import { Days } from "../../../hooks/useCalendar";
import DateButton from "./DateButton";

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
  const handleDate = (date: string) => {
    // console.log(date);
    // 날짜 선택 시 수행할 작업
  };

  return (
    <tbody>
      {getDate().map((week, i) => (
        <tr key={i} className="py-4">
          {week.map(({ date, day, isToday, month }) => {
            const isNotCurrentMonth = month !== currentMonth; // 이번 달에 해당하는 일만 찾아줌
            const isAfterToday = isAfter(date, today); // 오늘 보다 뒤의 날짜
            return (
              <DateButton
                key={date}
                date={date}
                day={day}
                isToday={isToday}
                isNotCurrentMonth={isNotCurrentMonth}
                isAfterToday={isAfterToday}
                onClick={handleDate}
              />
            );
          })}
        </tr>
      ))}
    </tbody>
  );
}

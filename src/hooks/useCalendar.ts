import {
  format,
  addMonths,
  addYears,
  subMonths,
  subYears,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  setMonth,
  isWeekend,
  isToday,
} from "date-fns";

import { useState } from "react";

const dateFormat = "yyyy.MM.dd";
export type Days = {
  year: string;
  month: string;
  date: string;
  day: string;
  isWeekend: boolean;
  isToday: boolean;
};

export const useCalendar = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  // 오늘 날짜 포맷팅
  const today = format(new Date(), dateFormat);
  // 현재 연, 월
  const currentYear = currentDate.getFullYear();
  const currentMonth = String(currentDate.getMonth() + 1);

  // hande date
  const goToDate = (date: Date) => setCurrentDate(date); // 특정 날짜 이동
  const goToMonth = (month: number) =>
    setCurrentDate((prev) => setMonth(prev, month));
  const goToday = () => setCurrentDate(new Date());
  // handle month
  const goToPrevMonth = () => setCurrentDate((prev) => subMonths(prev, 1));
  const goToNextMonth = () => setCurrentDate((prev) => addMonths(prev, 1));
  // handle year
  const goToPrevYear = () => setCurrentDate((prev) => subYears(prev, 1));
  const goToNextYear = () => setCurrentDate((prev) => addYears(prev, 1));

  // get date - 포맷팅한 날짜 배열들 리턴
  const getDate = (): Days[][] => {
    const startMonth = startOfMonth(currentDate); // 주어진 날짜의 해당 월의 첫째 날을 반환
    const endMonth = endOfMonth(currentDate); // 주어진 날짜의 해당 월의 마지막 날을 반환
    const startDate = startOfWeek(startMonth); // 주어진 날짜의 해당 주의 첫째 날을 반환
    const endDate = endOfWeek(endMonth); // 주어진 날짜의 해당 주의 마지막 날을 반환
    const days = eachDayOfInterval({ start: startDate, end: endDate }); // start ~ end까지 모든 날짜 배열 반환

    // 날짜들을 주 별로 리턴
    return days.reduce<Days[][]>((weeks, day, index) => {
      const formattedDay = {
        date: format(day, dateFormat),
        year: format(day, "yyyy"),
        month: format(day, "M"),
        day: format(day, "d"),
        isWeekend: isWeekend(day),
        isToday: isToday(day),
      };

      return (
        index % 7 === 0
          ? weeks.push([formattedDay]) // 0또는 7의 배수일 때 그 주의 첫 날(일요일)을 배열화 해서 push
          : weeks[weeks.length - 1].push(formattedDay), // 그 주의 배열에 같은 주 날들을 push
        weeks // 쉼표연산자: weeks를 return
      );
    }, []);
  };

  return {
    today,
    currentYear,
    currentMonth,
    currentDate,
    goToDate,
    goToMonth,
    goToday,
    goToPrevMonth,
    goToNextMonth,
    goToPrevYear,
    goToNextYear,
    getDate,
  };
};

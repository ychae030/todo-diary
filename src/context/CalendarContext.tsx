import React, { createContext, useContext, useState } from "react";
import { useCalendar } from "../hooks/useCalendar";

// Context 타입 정의
type CalendarContextType = {
  selectedDate: string;
  setSelectedDate: (date: string) => void;
  handleDateClick: (date: string) => void;
  disablePastDates: boolean;
  showIcons: boolean;
  mode: "diary" | "todo";
};
// Provider 타입 정의
type CalendarProviderType = {
  children: React.ReactNode;
  mode: "diary" | "todo";
};

// Context 생성
export const CalendarContext = createContext<CalendarContextType | undefined>(
  undefined
);

// Provider 컴포넌트 정의
export const CalendarProvider = ({ children, mode }: CalendarProviderType) => {
  const { today } = useCalendar();
  const [selectedDate, setSelectedDate] = useState<string>(today);

  // 날짜 클릭 핸들러 정의
  const handleDateClick = (date: string) => {
    if (mode === "diary") {
    } else {
      setSelectedDate(date);
    }
  };

  return (
    <CalendarContext.Provider
      value={{
        selectedDate,
        setSelectedDate,
        handleDateClick,
        disablePastDates: mode === "todo",
        showIcons: mode === "diary",
        mode: mode,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
};

export const useCalendarContext = () => {
  const context = useContext(CalendarContext);
  if (!context) {
    throw new Error(
      "useCalendarContext must be used within a CalendarProvider"
    );
  }
  return context;
};

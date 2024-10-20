import React, { createContext, useContext, useState } from "react";
import { useCalendar } from "../hooks/useCalendar";
import { useNavigate } from "react-router-dom";

// Context 타입 정의
type CalendarContextType = {
  selectedDate: string;
  setSelectedDate: (date: string) => void;
  handleDateClick: (date: string) => void;
  disablePastDates: boolean;
  mode: "diary" | "todo";
};
// Provider 타입 정의
type CalendarProviderType = {
  children: React.ReactNode;
  mode: "diary" | "todo";
  fetch?: boolean;
};

// Context 생성
export const CalendarContext = createContext<CalendarContextType | undefined>(
  undefined
);

// Provider 컴포넌트 정의
export const CalendarProvider = ({ children, mode }: CalendarProviderType) => {
  const { today } = useCalendar();
  const [selectedDate, setSelectedDate] = useState<string>(today);
  const navigate = useNavigate();

  // 날짜 클릭 핸들러 정의
  const handleDateClick = (date: string) => {
    setSelectedDate(date);
    if (mode === "diary") {
      navigate("/diary/create", { state: date });
    }
  };

  return (
    <CalendarContext.Provider
      value={{
        selectedDate,
        setSelectedDate,
        handleDateClick,
        disablePastDates: mode === "todo",
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

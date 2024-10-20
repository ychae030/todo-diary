import React, { createContext, useContext, useState } from "react";
import { useCalendar } from "../hooks/useCalendar";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { getDiaries } from "../api/diaryApi";
import { DiaryItemType } from "../components/diary/create/TextArea";

// Context 타입 정의
type CalendarContextType = {
  selectedDate: string;
  setSelectedDate: (date: string) => void;
  handleDateClick: (date: string) => void;
  disablePastDates: boolean;
  mode: "diary" | "todo";
  diaryData?: DiaryItemType[];
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
export const CalendarProvider = ({
  children,
  mode,
  fetch = false,
}: CalendarProviderType) => {
  const { today } = useCalendar();
  const [selectedDate, setSelectedDate] = useState<string>(today);
  const navigate = useNavigate();

  const shouldFetchDiaries = mode === "diary" && fetch; // 특정 상황일때만 쿼리 실행
  const { data: diaryData } = useQuery("diaries", () => getDiaries(), {
    enabled: shouldFetchDiaries,
  });

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
        diaryData, // diary 데이터를 Context에 전달
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

import { format } from "date-fns";
import { useLocation } from "react-router-dom";
import { useCalendarContext } from "../context/CalendarContext";
import { ko } from "date-fns/locale";

export default function useDiary() {
  const { selectedDate } = useCalendarContext();
  const { state } = useLocation();
  const date = state || selectedDate;
  const dayOfWeek = format(date, "EEEE", { locale: ko });

  return { date, dayOfWeek };
}

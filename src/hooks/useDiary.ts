import { useCalendarContext } from "../context/CalendarContext";
import { useLocation } from "react-router-dom";

export default function useDiary() {
  const { selectedDate } = useCalendarContext();
  const { state } = useLocation();
  const date = state || selectedDate;
  return { date };
}

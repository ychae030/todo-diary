import React from "react";
import { emoji, Mood } from "../../../images/emoji";
import { useLocation } from "react-router-dom";
import { ko } from "date-fns/locale";
import { format } from "date-fns";
import { useCalendarContext } from "../../../context/CalendarContext";

type MoodAndDateProps = {
  mood: Mood;
};
export default function MoodAndDate({ mood }: MoodAndDateProps) {
  const { selectedDate } = useCalendarContext();
  const { state } = useLocation();
  const date = state || selectedDate;
  const dayOfWeek = format(date, "EEEE", { locale: ko });

  return (
    <div className="grid justify-center items-center text-center">
      <div className="w-16 mx-auto mb-3">
        <img className="w-full" src={emoji[mood]} alt={mood} />
      </div>
      <p>{date}</p>
      <p className="text-slate-400">{dayOfWeek}</p>
    </div>
  );
}

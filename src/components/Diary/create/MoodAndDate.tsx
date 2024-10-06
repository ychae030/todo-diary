import React from "react";
import { emoji, Mood } from "../../../images/emoji";
import { useLocation } from "react-router-dom";
import { ko } from "date-fns/locale";
import { format } from "date-fns";
import { useCalendarContext } from "../../../context/CalendarContext";

type MoodAndDateProps = {
  mood: Mood;
  openMoodModal: () => void;
};
export default function MoodAndDate({ mood, openMoodModal }: MoodAndDateProps) {
  const { selectedDate } = useCalendarContext();
  const { state } = useLocation();
  const date = state || selectedDate;
  const dayOfWeek = format(date, "EEEE", { locale: ko });

  return (
    <div className="grid justify-center items-center text-center">
      <button className="w-16 mx-auto mb-3" onClick={openMoodModal}>
        <img className="w-full" src={emoji[mood]} alt={mood} />
      </button>
      <p>{date}</p>
      <p className="text-slate-400">{dayOfWeek}</p>
    </div>
  );
}

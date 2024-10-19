import React from "react";
import { emoji, Mood } from "../../../images/emoji";
import useDiary from "../../../hooks/useDiary";

type MoodAndDateProps = {
  mood: Mood;
  openMoodModal: () => void;
};
export default function MoodAndDate({ mood, openMoodModal }: MoodAndDateProps) {
  const { date, dayOfWeek } = useDiary();

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

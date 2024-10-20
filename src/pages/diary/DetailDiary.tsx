import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getDiary } from "../../api/diaryApi";
import MoodAndDate from "../../components/diary/create/MoodAndDate";
import { CalendarProvider } from "../../context/CalendarContext";

export default function DetailDiary() {
  const { date } = useParams();
  const { data, error, isLoading } = useQuery("diary", () =>
    getDiary(date as string)
  );
  const { mood, image, text, isCenter } = data?.[0] || {};

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: </div>;

  return (
    <div>
      <CalendarProvider mode="diary">
        <MoodAndDate mood={mood!} mode="read" readModeDate={date} />
      </CalendarProvider>
      {image && (
        <div className="w-1/3  my-3">
          <img src={image} alt="" />
        </div>
      )}
      <div className={` mt-5 ${isCenter ? "text-center" : "text-left"}`}>
        {text}
      </div>
    </div>
  );
}

import { CalendarProvider } from "../../../context/CalendarContext";
import MoodAndDate from "../common/MoodAndDate";
import { useDiaryFetchContext } from "../../../context/DiaryFetchContext";

export default function DetailDiaryLayout() {
  const { diaryData, error, isLoading } = useDiaryFetchContext();
  const { mood, image, text, isCenter, date } = diaryData?.[0] || {};

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: </div>;
  return (
    <div>
      <CalendarProvider mode="diary">
        <MoodAndDate mood={mood!} mode="read" Diarydate={date} />
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

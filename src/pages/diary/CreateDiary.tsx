import { useState } from "react";
import { Mood } from "../../images/emoji";
import MoodsModal from "../../components/diary/create/MoodsModal";
import MoodAndDate from "../../components/diary/create/MoodAndDate";
import { CalendarProvider } from "../../context/CalendarContext";

export default function CreateDiary() {
  const [mood, setMood] = useState<Mood>("happy");

  return (
    <div>
      <MoodsModal mood={mood} handleMood={setMood} />
      <CalendarProvider mode="diary">
        <MoodAndDate mood={mood} />
      </CalendarProvider>
    </div>
  );
}

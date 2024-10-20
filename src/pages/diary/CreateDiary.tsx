import { useState } from "react";
import { Mood } from "../../images/emoji";
import MoodsModal from "../../components/diary/create/MoodsModal";
import MoodAndDate from "../../components/diary/common/MoodAndDate";
import { CalendarProvider } from "../../context/CalendarContext";
import useModal from "../../hooks/useModal";
import TextArea from "../../components/diary/create/TextArea";

export default function CreateDiary() {
  const [mood, setMood] = useState<Mood>("happy");
  const { isOpen, closeModal, openModal } = useModal();

  return (
    <div>
      <MoodsModal
        mood={mood}
        handleMood={setMood}
        isMoodOpen={isOpen}
        closeMoodModal={closeModal}
      />
      <CalendarProvider mode="diary">
        <MoodAndDate mood={mood} openMoodModal={openModal} />
        <TextArea mood={mood} />
      </CalendarProvider>
    </div>
  );
}

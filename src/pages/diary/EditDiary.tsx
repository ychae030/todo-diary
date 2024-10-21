import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import MoodAndDate from "../../components/diary/common/MoodAndDate";
import useModal from "../../hooks/useModal";
import { CalendarProvider } from "../../context/CalendarContext";
import MoodsModal from "../../components/diary/create/MoodsModal";
import { Mood } from "../../images/emoji";
import TextArea from "../../components/diary/create/TextArea";

export default function EditDiary() {
  const { state } = useLocation();
  const { isOpen, closeModal, openModal } = useModal(false);
  const [mood, setMood] = useState<Mood>(state.mood);
  const { date, image, text, id } = state;
  console.log(mood);
  return (
    <>
      <MoodsModal
        mood={mood}
        handleMood={setMood}
        isMoodOpen={isOpen}
        closeMoodModal={closeModal}
      />
      <CalendarProvider mode="diary">
        <MoodAndDate
          mood={mood}
          openMoodModal={openModal}
          mode="edit"
          Diarydate={date}
        />
        <TextArea mood={mood} mode="edit" image={image} text={text} id={id} />
      </CalendarProvider>
    </>
  );
}

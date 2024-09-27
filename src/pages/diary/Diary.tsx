import React from "react";
import ListButton from "../../components/Diary/calendar/ListButton";
import CreateButton from "../../components/common/ui/CreateButton";
import Calendar from "../../components/common/calendar/Calendar";
import { CalendarProvider } from "../../context/CalendarContext";

export default function Diary() {
  return (
    <div>
      <ListButton />
      <CalendarProvider mode="diary">
        <Calendar />
      </CalendarProvider>
      <CreateButton feat="diary" />
    </div>
  );
}

import ListButton from "../../components/diary/calendar/ListButton";
import Calendar from "../../components/common/calendar/Calendar";
import { CalendarProvider } from "../../context/CalendarContext";

export default function Diary() {
  return (
    <div>
      <ListButton />
      <CalendarProvider mode="diary">
        <Calendar />
      </CalendarProvider>
    </div>
  );
}

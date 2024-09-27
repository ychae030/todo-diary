import { useCalendarContext } from "../../../context/CalendarContext";
import { useCalendar } from "../../../hooks/useCalendar";
import CalendarBody from "./calendarBody/CalendarBody";
import CalendarWeeks from "./calendarBody/CalendarWeeks";
import TodayButton from "../../Diary/calendar/TodayButton";
import CalendarControls from "./calendarControls/CalendarControls";

export default function Calendar() {
  const {
    today,
    currentYear,
    currentMonth,
    goToMonth,
    goToday,
    goToPrevMonth,
    goToNextMonth,
    goToPrevYear,
    goToNextYear,
    getDate,
  } = useCalendar();
  const { mode } = useCalendarContext();
  return (
    <div className="grid gap-6 text-center pt-7">
      <CalendarControls
        goToNextMonth={goToNextMonth}
        goToPrevMonth={goToPrevMonth}
        currentYear={currentYear}
        currentMonth={currentMonth}
        goToMonth={goToMonth}
        goToNextYear={goToNextYear}
        goToPrevYear={goToPrevYear}
        goToday={goToday}
      />
      <table>
        <CalendarWeeks />
        <CalendarBody
          currentMonth={currentMonth}
          getDate={getDate}
          today={today}
        />
      </table>

      {mode === "diary" && (
        <TodayButton
          currentYear={currentYear}
          currentMonth={currentMonth}
          goToday={goToday}
        />
      )}
    </div>
  );
}

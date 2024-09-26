import CalendarBody from "../../components/calendar/calendarBody/CalendarBody";
import CalendarControls from "../../components/calendar/calendarControls/CalendarControls";
import CalendarWeeks from "../../components/calendar/calendarBody/CalendarWeeks";
import TodayButton from "../../components/calendar/calendarButtons/TodayButton";
import { useCalendar } from "../../hooks/useCalendar";
import ListButton from "../../components/calendar/calendarButtons/ListButton";
import CreateButton from "../../components/common/ui/CreateButton";

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
  return (
    <>
      <ListButton />
      <div className="grid gap-6 text-center pt-7">
        <CalendarControls
          goToNextMonth={goToNextMonth}
          goToPrevMonth={goToPrevMonth}
          currentYear={currentYear}
          currentMonth={currentMonth}
          goToMonth={goToMonth}
          goToNextYear={goToNextYear}
          goToPrevYear={goToPrevYear}
        />
        <table>
          <CalendarWeeks />
          <CalendarBody
            currentMonth={currentMonth}
            getDate={getDate}
            today={today}
          />
        </table>
        <TodayButton
          currentYear={currentYear}
          currentMonth={currentMonth}
          goToday={goToday}
        />
      </div>
      <CreateButton />
    </>
  );
}

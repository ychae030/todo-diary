import { useCalendar } from "../../hooks/useCalendar";
import { TodoType } from "../../pages/todo/Todo";
import TodoSection from "./TodoSection";

export default function TodoList({ data }: { data: TodoType[] }) {
  const { today } = useCalendar();
  const upcomingData = data.filter(
    ({ date }) => new Date(date) >= new Date(today)
  );
  return (
    <div>
      {upcomingData.map(({ date, items }) => (
        <TodoSection key={date} date={date} items={items} />
      ))}
    </div>
  );
}

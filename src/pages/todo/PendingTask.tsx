import { useLocation } from "react-router-dom";
import TodoSection from "../../components/todo/TodoSection";
import { TodoType } from "./Todo";

export default function PendingTask() {
  const location = useLocation();
  const { pendingData } = location.state as { pendingData: TodoType[] };

  return (
    <div>
      {pendingData.map(({ date, items }) => (
        <TodoSection date={date} items={items} />
      ))}
    </div>
  );
}

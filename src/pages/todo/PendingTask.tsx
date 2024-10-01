import { useLocation } from "react-router-dom";
import TodoSection from "../../components/todo/TodoSection";
import { TodoItemType } from "../../components/todo/TodoItem";

export default function PendingTask() {
  const location = useLocation();
  const { data } = location.state as { data: TodoItemType[] };

  return <TodoSection data={data} mode="pending" />;
}

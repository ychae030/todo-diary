import TodoSection from "./TodoSection";
import { useQuery } from "react-query";
import { useCalendar } from "../../hooks/useCalendar";
import { getFutureTodos } from "../../api/getTodos";

export default function TodoList() {
  const { today } = useCalendar();
  const { data, error, isLoading } = useQuery("todos", () =>
    getFutureTodos(today)
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: </div>;

  return <TodoSection data={data} />;
}

import { TodoItemType } from "../../components/todo/TodoItem";
import TodoList from "../../components/todo/TodoList";

export default function Todo() {
  const todoData: TodoType[] = Object.entries(data).flatMap(
    ([_, value]) => value
  );

  return (
    <div>
      <TodoList data={todoData} />
    </div>
  );
}
export type TodoType = {
  date: string;
  items: TodoItemType[];
};

type TodoDataType = Record<string, TodoType>;
const data: TodoDataType = {
  "2023.8.30": {
    date: "2023.8.30",
    items: [
      {
        id: "todo1",
        text: "리팩토링 하기",
        status: "active",
      },
      {
        id: "todo2",
        text: "회의 준비하기",
        status: "completed",
      },
    ],
  },
  "2024.9.26": {
    date: "2024.9.26",
    items: [
      {
        id: "todo3",
        text: "프로젝트 계획 세우기",
        status: "active",
      },
    ],
  },
};

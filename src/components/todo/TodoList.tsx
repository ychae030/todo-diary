import { TodoType } from "../../pages/todo/Todo";
import TodoItem from "./TodoItem";

export default function TodoList({ data }: { data: TodoType[] }) {
  return (
    <div>
      {data.map(({ date, items }) => (
        <div key={date} className="mt-3">
          <h3 className="mb-2 text-brand">{date}</h3>
          <ul>
            {items.map(({ id, text, status }) => (
              <TodoItem key={id} id={id} text={text} status={status} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

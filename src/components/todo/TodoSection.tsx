import TodoItem, { TodoItemType } from "./TodoItem";

type TodoSectionType = {
  date: string;
  items: TodoItemType[];
};
export default function TodoSection({ date, items }: TodoSectionType) {
  return (
    <div key={date} className="mt-4">
      <h3 className="mb-2 text-brand">{date}</h3>
      <ul>
        {items.map(({ id, text, status }) => (
          <TodoItem key={id} id={id} text={text} status={status} />
        ))}
      </ul>
    </div>
  );
}

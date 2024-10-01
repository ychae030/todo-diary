import TodoItem from "./TodoItem";

type Status = "active" | "completed";
type TodoItemType = {
  id: string;
  text: string;
  status: Status;
  createdAt?: string;
  date?: string;
};
type TodoSectionProps = {
  data?: TodoItemType[];
  mode?: "pending" | "future";
};
export default function TodoSection({ data, mode }: TodoSectionProps) {
  let lastDate: string | undefined = "";
  return (
    <section>
      {data?.map((item) => {
        const showDate = lastDate !== item.date;
        lastDate = item.date;
        return (
          <div key={item.id}>
            {showDate && <h3 className="mb-2 text-brand">{item.date}</h3>}
            <TodoItem item={item} mode={mode} />
          </div>
        );
      })}
    </section>
  );
}

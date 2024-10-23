import TodoItem, { TodoItemProps, TodoItemType } from "./TodoItem";

type TodoSectionProps = Omit<TodoItemProps, "item"> & {
  data?: TodoItemType[];
};
export default function TodoSection({
  data,
  mode,
  setDraggingItem,
}: TodoSectionProps) {
  let lastDate: string | undefined = "";
  return (
    <section>
      {data?.map((item) => {
        const showDate = lastDate !== item.date;
        lastDate = item.date;
        return (
          <div key={item.id}>
            {showDate && (
              <h3 className="mb-2 mt-3 text-brand dark:text-brandDark">
                {item.date}
              </h3>
            )}
            <TodoItem
              item={item}
              mode={mode}
              setDraggingItem={setDraggingItem}
            />
          </div>
        );
      })}
    </section>
  );
}

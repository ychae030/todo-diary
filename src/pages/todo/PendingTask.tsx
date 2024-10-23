import { useLocation } from "react-router-dom";
import TodoSection from "../../components/todo/TodoSection";
import { TodoItemType } from "../../components/todo/TodoItem";
import { useState } from "react";
import { deleteTodo } from "../../api/todoApi";
import DeleteArea from "../../components/common/ui/DeleteArea";

export default function PendingTask() {
  const location = useLocation();
  const { data: initialData } = location.state as { data: TodoItemType[] };
  const [data, setData] = useState<TodoItemType[]>(initialData);
  const [draggingItem, setDraggingItem] = useState<TodoItemType | null>(null);

  const handleDropToDelete = async () => {
    if (draggingItem) {
      await deleteTodo(draggingItem.id);
      setData((prevData) =>
        prevData.filter((item) => item.id !== draggingItem.id)
      );
      setDraggingItem(null);
    }
  };
  return (
    <>
      <p className="my-5 text-lg">
        아직 완료하지 못한 할 일이 있네요! <br /> 힘내서 얼른 끝내봐요 '(•̀ᴗ•́)و ̑̑'
      </p>
      <TodoSection
        data={data}
        mode="pending"
        setDraggingItem={setDraggingItem}
      />

      <DeleteArea draggingItem={draggingItem} onDrop={handleDropToDelete} />
    </>
  );
}

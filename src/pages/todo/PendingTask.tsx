import { useLocation } from "react-router-dom";
import TodoSection from "../../components/todo/TodoSection";
import { TodoItemType } from "../../components/todo/TodoItem";

export default function PendingTask() {
  const location = useLocation();
  const { data } = location.state as { data: TodoItemType[] };

  return (
    <>
      <p className="my-5 text-lg">
        아직 완료하지 못한 할 일이 있네요! <br /> 힘내서 얼른 끝내봐요 '(•̀ᴗ•́)و ̑̑'
      </p>
      <TodoSection data={data} mode="pending" />
    </>
  );
}

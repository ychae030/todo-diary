import { useNavigate } from "react-router-dom";
import { GrFormNext } from "react-icons/gr";
import { useCalendar } from "../../hooks/useCalendar";
import { useQuery } from "react-query";
import { getPendingTodos } from "../../api/getTodos";

export default function PendingTaskBox() {
  const navigate = useNavigate();
  const { today } = useCalendar();
  const { data, error, isLoading } = useQuery("pendingTodos", () =>
    getPendingTodos(today)
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: </div>;
  if (!data?.length) return null;

  return (
    <button
      onClick={() => navigate("/todo/pending", { state: { data } })}
      className="flex w-full items-center justify-between bg-white border border-slate-200 rounded-sm p-3 mt-3"
    >
      <span>아직 완료하지 않은 할 일이 있어요!👀</span>
      <GrFormNext className="text-xl" />
    </button>
  );
}

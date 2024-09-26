import { useNavigate } from "react-router-dom";
import { useCalendar } from "../../hooks/useCalendar";
import { TodoType } from "../../pages/todo/Todo";
import { GrFormNext } from "react-icons/gr";

export default function PendingTaskBox({ data }: { data: TodoType[] }) {
  const navigate = useNavigate();
  const { today } = useCalendar();
  const pendingData = data
    .filter(({ date }) => new Date(date) < new Date(today))
    .map(({ date, items }) => ({
      date,
      items: items.filter(({ status }) => status === "active"),
    }))
    .filter(({ items }) => items.length > 0);

  console.log(pendingData);
  if (!pendingData.length) return null;
  return (
    <button
      onClick={() => navigate("/todo/pending", { state: { pendingData } })}
      className="flex w-full items-center justify-between bg-white border border-slate-200 rounded-sm p-3 mt-3"
    >
      <span>아직 완료하지 않은 할 일이 있어요!👀</span>
      <GrFormNext className="text-xl" />
    </button>
  );
}

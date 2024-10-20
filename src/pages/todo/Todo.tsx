import CreateButton from "../../components/common/ui/CreateButton";
import PendingTaskBox from "../../components/todo/PendingTaskBox";
import TodayDiary from "../../components/todo/TodayDiary";
import TodoInputModal from "../../components/todo/TodoInputModal";
import TodoList from "../../components/todo/TodoList";
import { DiaryFetchProvider } from "../../context/DiaryFetchContext";
import { useCalendar } from "../../hooks/useCalendar";
import useModal from "../../hooks/useModal";

export default function Todo() {
  const { isOpen, openModal, closeModal } = useModal();
  const { today } = useCalendar();
  return (
    <div>
      <PendingTaskBox />
      <DiaryFetchProvider date={today}>
        <TodayDiary />
      </DiaryFetchProvider>
      <TodoList />
      <CreateButton feat="todo" openModal={openModal} />
      {isOpen && <TodoInputModal isFormOpen={isOpen} closeForm={closeModal} />}
    </div>
  );
}

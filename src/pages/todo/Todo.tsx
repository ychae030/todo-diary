import CreateButton from "../../components/common/ui/CreateButton";
import PendingTaskBox from "../../components/todo/PendingTaskBox";
import TodoInputModal from "../../components/todo/TodoInputModal";
import TodoList from "../../components/todo/TodoList";
import useModal from "../../hooks/useModal";

export default function Todo() {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <div>
      <PendingTaskBox />
      <TodoList />
      <CreateButton feat="todo" openModal={openModal} />
      {isOpen && <TodoInputModal isFormOpen={isOpen} closeForm={closeModal} />}
    </div>
  );
}

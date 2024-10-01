import Modal from "../../components/common/Layouts/Modal";
import CreateButton from "../../components/common/ui/CreateButton";
import PendingTaskBox from "../../components/todo/PendingTaskBox";
import TodoInputForm from "../../components/todo/TodoInputForm";
import TodoList from "../../components/todo/TodoList";
import { CalendarProvider } from "../../context/CalendarContext";
import useModal from "../../hooks/useModal";

export default function Todo() {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <div>
      <PendingTaskBox />
      <TodoList />
      <CreateButton feat="todo" openModal={openModal} />
      {isOpen && (
        <Modal position={"bottom"} isOpen={isOpen} closeModal={closeModal}>
          <CalendarProvider mode="todo">
            <TodoInputForm closeForm={closeModal} />
          </CalendarProvider>
        </Modal>
      )}
    </div>
  );
}

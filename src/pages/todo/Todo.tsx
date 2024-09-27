import Modal from "../../components/common/Layouts/Modal";
import CreateButton from "../../components/common/ui/CreateButton";
import PendingTaskBox from "../../components/todo/PendingTaskBox";
import TodoInputForm from "../../components/todo/TodoInputForm";
import { TodoItemType } from "../../components/todo/TodoItem";
import TodoList from "../../components/todo/TodoList";
import useModal from "../../hooks/useModal";

export default function Todo() {
  const { isOpen, openModal, closeModal } = useModal();
  const todoData: TodoType[] = Object.entries(data).flatMap(
    ([_, value]) => value
  );

  return (
    <div>
      <PendingTaskBox data={todoData} />
      <TodoList data={todoData} />
      <CreateButton feat="todo" openModal={openModal} />
      {isOpen && (
        <Modal position={"bottom"} isOpen={isOpen} closeModal={closeModal}>
          <TodoInputForm />
        </Modal>
      )}
    </div>
  );
}
export type TodoType = {
  date: string;
  items: TodoItemType[];
};

type TodoDataType = Record<string, TodoType>;
const data: TodoDataType = {
  "2024.8.30": {
    date: "2024.8.30",
    items: [
      {
        id: "todo1",
        text: "리팩토링 하기",
        status: "active",
      },
      {
        id: "todo2",
        text: "회의 준비하기",
        status: "completed",
      },
    ],
  },
  "2024.9.26": {
    date: "2024.9.26",
    items: [
      {
        id: "todo3",
        text: "프로젝트 계획 세우기",
        status: "active",
      },
    ],
  },
};

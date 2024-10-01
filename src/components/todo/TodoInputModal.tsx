import React from "react";
import Modal from "../common/Layouts/Modal";
import { CalendarProvider } from "../../context/CalendarContext";
import TodoInputForm, { TodoInputFormProps } from "./TodoInputForm";

type TodoInputModalProps = TodoInputFormProps & {
  isFormOpen: boolean;
};
export default function TodoInputModal({
  isFormOpen,
  closeForm,
  mode = "create",
  editItem,
}: TodoInputModalProps) {
  return (
    <Modal position={"bottom"} isOpen={isFormOpen} closeModal={closeForm}>
      <CalendarProvider mode="todo">
        <TodoInputForm mode={mode} closeForm={closeForm} editItem={editItem} />
      </CalendarProvider>
    </Modal>
  );
}

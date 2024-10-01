import { setDoc } from "firebase/firestore";
import { TodoItemType } from "../components/todo/TodoItem";
import { getDocRef } from "./firebase";

// addTodo
export const addTodo = async (todoItem: TodoItemType, today: string) => {
  const todoItmesDocRef = getDocRef("todos", todoItem.id);
  try {
    await setDoc(todoItmesDocRef, { ...todoItem, date: today });
  } catch (error) {
    console.error("Failed to add document:", error);
  }
};

import {
  updateDoc,
  getDocs,
  query,
  where,
  deleteDoc,
  setDoc,
} from "firebase/firestore";
import { TodoItemType } from "../components/todo/TodoItem";
import { getDocRef, getCollectionRef } from "./firebase";

// 공통 Firestore 쿼리 실행 함수
const executeQuery = async (q: any): Promise<TodoItemType[]> => {
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => doc.data() as TodoItemType);
};

// getFutureTodos
export const getFutureTodos = async (today: string) => {
  const q = query(getCollectionRef("todos"), where("date", ">=", today));
  return executeQuery(q);
};

// getPendingTodos
export const getPendingTodos = async (today: string) => {
  const q = query(
    getCollectionRef("todos"),
    where("date", "<", today),
    where("status", "==", "active")
  );
  return executeQuery(q);
};

// addTodo
export const addTodo = async (todoItem: TodoItemType, today: string) => {
  const todoItmesDocRef = getDocRef("todos", todoItem.id);
  try {
    await setDoc(todoItmesDocRef, { ...todoItem, date: today });
  } catch (error) {
    console.error("Failed to add document:", error);
  }
};

// updateTodo
export const updateTodo = async (
  todoId: string,
  updatedData: Partial<TodoItemType>
) => {
  try {
    await updateDoc(getDocRef("todos", todoId), updatedData);
    console.log("Document updated successfully for ID:", todoId);
  } catch (error) {
    console.error("Failed to update document for ID:", todoId, error);
  }
};

// deleteTodo
export const deleteTodo = async (todoId: string) => {
  try {
    await deleteDoc(getDocRef("todos", todoId));
    console.log(`Document with ID ${todoId} has been deleted.`);
  } catch (error) {
    console.error("Error deleting document:", error);
  }
};

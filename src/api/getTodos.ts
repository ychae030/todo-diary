import { getDocs, query, where } from "firebase/firestore";
import { TodoItemType } from "../components/todo/TodoItem";
import { getCollectionRef } from "./firebase";

// 공통 Firestore 쿼리 실행 함수
const executeQuery = async (q: any): Promise<TodoItemType[]> => {
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => doc.data() as TodoItemType);
};

// getFutureTodos
export const getFutureTodos = async (today: string) => {
  const q = query(getCollectionRef("todoItems"), where("date", ">=", today));
  return executeQuery(q);
};

// getPendingTodos
export const getPendingTodos = async (today: string) => {
  const q = query(
    getCollectionRef("todoItems"),
    where("date", "<", today),
    where("status", "==", "active")
  );
  return executeQuery(q);
};

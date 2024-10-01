import { arrayUnion, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { TodoItemType } from "../components/todo/TodoItem";
import { getDocRef } from "./firebase";

// addTodo
export const addTodo = async (todoItem: TodoItemType, today: string) => {
  const todoItmesDocRef = getDocRef("todoItems", todoItem.id);
  const todosDocRef = getDocRef("todos", today);

  // 1. todoItems 컬렉션에 새 할일 추가
  await setDoc(todoItmesDocRef, { ...todoItem, date: today });

  // 2. todos 컬렉션에 해당 날자에 할일 id 추가
  const docSnap = await getDoc(todosDocRef);
  if (docSnap.exists()) {
    // 날짜가 존재할 경우 todoIds 배열에 할일 id추가
    await updateDoc(todosDocRef, {
      todoIds: arrayUnion(todoItem.id),
    });
  } else {
    // 날짜가 없을 때 새로운 문서 생성
    await setDoc(todosDocRef, {
      date: today,
      todoIds: [todoItem.id],
    });
  }
};

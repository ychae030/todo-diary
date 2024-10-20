import { deleteDoc, getDocs, query, setDoc, where } from "firebase/firestore";
import { DiaryItemType } from "../components/diary/create/TextArea";
import { getCollectionRef, getDocRef } from "./firebase";

// get Diary Detail
export const getDiary = async (date: string) => {
  const q = query(getCollectionRef("diaries"), where("date", "==", date));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => doc.data() as DiaryItemType);
};

// get Diaries
export const getDiaries = async () => {
  const querySnapshot = await getDocs(getCollectionRef("diaries"));
  return querySnapshot.docs.map((doc) => doc.data() as DiaryItemType);
};

// add Diary
export const addDiary = async (diayItem: DiaryItemType) => {
  const diayItemsDocRef = getDocRef("diaries", diayItem.id);
  try {
    await setDoc(diayItemsDocRef, diayItem);
  } catch (error) {
    console.error("Failed to add document:", error);
  }
};

// deleteDiary
export const deleteDiary = async (diaryId: string) => {
  try {
    await deleteDoc(getDocRef("diaries", diaryId));
    console.log(`Document with ID ${diaryId} has been deleted.`);
  } catch (error) {
    console.error("Error deleting document:", error);
  }
};

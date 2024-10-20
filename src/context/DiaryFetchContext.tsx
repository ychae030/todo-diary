import { createContext, useContext } from "react";
import { useQuery } from "react-query";
import { getDiaries, getDiary } from "../api/diaryApi";
import { DiaryItemType } from "../components/diary/create/TextArea";

// FetchContext 타입 정의
type DiaryFetchContextType = {
  diaryData?: DiaryItemType[]; // diaryData 속성 추가
  isLoading: boolean;
  error?: Error;
};

// FetchContext 생성
const DiaryFetchContext = createContext<DiaryFetchContextType | undefined>(
  undefined
);

export const DiaryFetchProvider = ({
  children,
  date,
}: {
  children: React.ReactNode;
  date: string;
}) => {
  const {
    data: diaryData,
    isLoading,
    error: queryError,
  } = useQuery<DiaryItemType[]>(["diary", date], () => getDiary(date), {
    enabled: !!date,
  });

  // error가 unknown 타입이므로, Error 타입인지 확인
  const error = queryError instanceof Error ? queryError : undefined;

  return (
    <DiaryFetchContext.Provider value={{ diaryData, isLoading, error }}>
      {children}
    </DiaryFetchContext.Provider>
  );
};

// FetchContext를 쉽게 사용할 수 있는 Hook
export const useDiaryFetchContext = () => {
  const context = useContext(DiaryFetchContext);
  if (!context) {
    throw new Error("useFetchContext must be used within a FetchProvider");
  }
  return context;
};

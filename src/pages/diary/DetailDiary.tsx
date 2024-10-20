import { useParams } from "react-router-dom";
import DetailDiaryLayout from "../../components/diary/detail/DetailDiaryLayout";
import { DiaryFetchProvider } from "../../context/DiaryFetchContext";

export default function DetailDiary() {
  const { date } = useParams();
  return (
    <DiaryFetchProvider date={date!}>
      <DetailDiaryLayout />
    </DiaryFetchProvider>
  );
}

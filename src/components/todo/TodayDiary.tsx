import { useNavigate } from "react-router-dom";
import { useDiaryFetchContext } from "../../context/DiaryFetchContext";
import { LuSmilePlus } from "react-icons/lu";
import { useCalendar } from "../../hooks/useCalendar";
import { emoji } from "../../images/emoji";
import DiaryAction from "./DiaryAction";

export default function TodayDiary() {
  const { diaryData } = useDiaryFetchContext();
  const { today } = useCalendar();
  const navigate = useNavigate();
  const isDiaryEmpty = !diaryData?.length;

  if (isDiaryEmpty)
    return (
      <DiaryAction
        text="오늘 하루를 기록 해볼까요?"
        onClick={() => navigate("/diary/create", { state: today })}
        children={<LuSmilePlus />}
      />
    );

  return (
    <DiaryAction
      text="오늘 기록한 일기를 확인해 봐요!"
      onClick={() => navigate(`/diary/detail/${today}`)}
      children={
        <img src={emoji[diaryData && diaryData[0].mood]} alt="오늘의 기분" />
      }
    />
  );
}

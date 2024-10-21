import { emoji, Mood } from "../../../images/emoji";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import useDiary from "../../../hooks/useDiary";

type MoodAndDateProps = {
  mood: Mood;
  openMoodModal?: () => void;
  mode?: "create" | "read" | "edit";
  Diarydate?: string;
};
export default function MoodAndDate({
  mood,
  openMoodModal,
  mode = "create",
  Diarydate,
}: MoodAndDateProps) {
  const { date: createModeDate } = useDiary();
  const date = mode === "create" ? createModeDate : Diarydate;
  const dayOfWeek = format(date, "EEEE", { locale: ko });

  return (
    <div className="grid justify-center items-center text-center">
      <button className="w-16 mx-auto mb-3" onClick={openMoodModal}>
        {mood && <img className="w-full" src={emoji[mood]} alt={mood} />}
      </button>
      <p>{date}</p>
      <p className="text-slate-400">{dayOfWeek}</p>
    </div>
  );
}

type TodayButtonProps = {
  currentYear: number;
  currentMonth: string;
  goToday: () => void;
};

export default function TodayButton({
  currentYear,
  currentMonth,
  goToday,
}: TodayButtonProps) {
  const isToday =
    currentYear === new Date().getFullYear() &&
    currentMonth === new Date().getMonth() + 1 + "";

  if (isToday) return null;
  return (
    <button
      className="btnToday"
      onClick={goToday}
      aria-label="오늘 날짜로 이동합니다."
    >
      today
    </button>
  );
}

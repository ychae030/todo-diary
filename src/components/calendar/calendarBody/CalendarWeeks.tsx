export default function CalendarWeeks() {
  const weekDays = ["일", "월", "화", "수", "목", "금", "토"];

  return (
    <thead>
      <tr>
        {weekDays.map((day) => (
          <th className="pb-3" key={day}>
            {day}
          </th>
        ))}
      </tr>
    </thead>
  );
}

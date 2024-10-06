import { format } from "date-fns";

export const getCurrentTime = (): string => {
  const now = new Date();
  return format(now, "a hh:mm").replace("AM", "오전").replace("PM", "오후");
};

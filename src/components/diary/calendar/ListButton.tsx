import { IoIosArrowForward } from "react-icons/io";

export default function ListButton() {
  return (
    <button className="flex items-center text-brand gap-1 dark:text-brandDark">
      List
      <IoIosArrowForward />
    </button>
  );
}

import { useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoPaperPlane } from "react-icons/io5";

export default function TodoInputForm() {
  const [date, setDate] = useState<string>("오늘");

  return (
    <div className="w-11/12 mx-auto">
      <input
        className="w-full border-b outline-none  border-brand"
        type="text"
      />
      <div className="flex mt-3 items-center justify-between text-brand">
        <div>
          <button>
            <FaRegCalendarAlt />
          </button>
          <span>{date}</span>
        </div>
        <button>
          <IoPaperPlane />
        </button>
      </div>
    </div>
  );
}

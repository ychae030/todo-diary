import { useState } from "react";
import { useNavigate } from "react-router-dom";

type Entry = "todo" | "diary";
const nav: Entry[] = ["todo", "diary"];

export default function MainHeader() {
  const [entry, setEntry] = useState<Entry>("todo");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleNav = (list: Entry) => {
    setEntry(list);
    navigate(`/${list}`);
    setIsOpen(false);
  };

  return (
    <header>
      <h1>
        <button onClick={() => setIsOpen((prev) => !prev)}>{entry}</button>
      </h1>
      <ul>
        {isOpen &&
          nav.map((list) => (
            <li className={list === entry ? "active" : ""}>
              <button onClick={() => handleNav(list)}>{list}</button>
            </li>
          ))}
      </ul>
    </header>
  );
}

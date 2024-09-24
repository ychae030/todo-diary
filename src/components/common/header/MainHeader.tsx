import { useState } from "react";
import { useNavigate } from "react-router-dom";

type Entry = "TODO" | "DIARY";
const navList: Entry[] = ["TODO", "DIARY"];

export default function MainHeader() {
  const [entry, setEntry] = useState<Entry>("TODO");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleNav = (list: Entry) => {
    setEntry(list);
    navigate(`/${list.toLocaleLowerCase()}`);
    setIsOpen(false);
  };

  return (
    <>
      <div>
        <h1 className="text-3xl">
          <button onClick={() => setIsOpen((prev) => !prev)}>{entry}</button>
        </h1>
        {isOpen && (
          <nav className="absolute w-24 py-2 text-center rounded-sm bg-white">
            <ul>
              {navList.map((list) => (
                <li className={list === entry ? "active" : "text-blue-100"}>
                  <button onClick={() => handleNav(list)}>{list}</button>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
      <button className="text-brand">Dark</button>
    </>
  );
}

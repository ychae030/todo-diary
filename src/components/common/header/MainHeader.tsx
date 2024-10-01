import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type Entry = "TODO" | "DIARY";
const navList: Entry[] = ["TODO", "DIARY"];

export default function MainHeader() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const entryFromUrl = location.pathname.split("/")[1].toUpperCase() as Entry;
  const [entry, setEntry] = useState<Entry>(entryFromUrl || "TODO");

  const handleNav = (list: Entry) => {
    setEntry(list);
    navigate(`/${list.toLocaleLowerCase()}`);
    setIsOpen(false);
  };

  useEffect(() => {
    const newEntry = location.pathname.split("/")[1]?.toUpperCase() as Entry;
    if (newEntry && newEntry !== entry) {
      setEntry(newEntry); // 경로 변경 시 entry 상태 업데이트
    }
  }, [location.pathname, entry]);

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
                <li
                  key={list}
                  className={list === entry ? "active" : "text-blue-100"}
                >
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

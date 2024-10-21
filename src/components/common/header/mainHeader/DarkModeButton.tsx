import React from "react";
import { useDarkModeContext } from "../../../../context/DarkModeContext";

export default function DarkModeButton() {
  const { isDarkMode, toggleDarkMode } = useDarkModeContext();
  return (
    <button onClick={toggleDarkMode}>{isDarkMode ? "Light" : "Dark"}</button>
  );
}

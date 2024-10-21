import LogoAndNav from "./LogoAndNav";
import DarkModeButton from "./DarkModeButton";
import { DarkModeProvider } from "../../../../context/DarkModeContext";

export default function MainHeader() {
  return (
    <>
      <LogoAndNav />
      <DarkModeProvider>
        <DarkModeButton />
      </DarkModeProvider>
    </>
  );
}

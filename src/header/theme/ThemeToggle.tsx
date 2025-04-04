import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import "../header.css"
const ThemeToggle: React.FC = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("ThemeToggle must be used within a ThemeProvider");
  }

  const { theme, toggleTheme } = themeContext;

  return (
    <button className="btntheme" onClick={toggleTheme}>
      {theme === "light" ? <MoonIcon width={30} height={30}/> : <SunIcon width={30} height={30}/>}
    </button>
  );
};

export default ThemeToggle;

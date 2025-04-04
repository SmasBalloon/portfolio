import { useContext } from "react";
import { BarreContext } from "./BarreContext";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";
import "../header.css";

const BarreToggle: React.FC = () => {
  const barreContext = useContext(BarreContext);

  if (!barreContext) {
    throw new Error("BarreToggle must be used within a ThemeProvider");
  }

  const { Barre, toggleBarre } = barreContext;

  return (
    <button className="btnBarre" onClick={toggleBarre}>
      {Barre === "open" ? <Cross1Icon width={30} height={30}/> : <HamburgerMenuIcon width={30} height={30}/>}
    </button>
  );
};

export default BarreToggle;

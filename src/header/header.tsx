import ThemeToggle from "./theme/ThemeToggle.tsx";
import BarreToggle from "./barre/BarreToggle.tsx";
import { BarreProvider } from "./barre/BarreContext";
import "./header.css";

export function NavBarre() {
  return (
    <>
      <header>
        <BarreProvider>
          <BarreToggle />
          <ThemeToggle />
        </BarreProvider>
      </header>
    </>
  );
}

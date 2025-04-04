import { NavBarre } from "./header/header.tsx";
import { ThemeProvider } from "./header/theme/ThemeContext.tsx";
import { First } from "./firstpage/first.tsx";
import { Contact } from "./contact/contact.tsx"
import { Skills } from "./skill/skill.tsx";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <NavBarre />
      <First />
      <Skills />
      <Contact />
    </ThemeProvider>
  );
};

export default App;

import { createContext, useState, useEffect, ReactNode } from "react";

// Définition du type pour le contexte
interface BarreContextType {
  Barre: string;
  toggleBarre: () => void;
}

// Création du contexte
export const BarreContext = createContext<BarreContextType | undefined>(undefined);

interface BarreProviderProps {
  children: ReactNode;
}

export const BarreProvider: React.FC<BarreProviderProps> = ({ children }) => {
  const [Barre, setBarre] = useState<string>(() => {
    return localStorage.getItem("barre") || "open";
  });

  useEffect(() => {
    document.body.setAttribute("data-barre", Barre);
    localStorage.setItem("barre", Barre);
  }, [Barre]);

  const toggleBarre = () => {
    setBarre(Barre === "open" ? "close" : "open");
  };

  return (
    <BarreContext.Provider value={{ Barre, toggleBarre }}>
      {children}
    </BarreContext.Provider>
  );
};

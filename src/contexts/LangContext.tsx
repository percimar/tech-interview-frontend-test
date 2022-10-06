import * as React from "react";

type Language = "en" | "ar";

const LangContext = React.createContext<
  | {
      lang: Language;
      setLang: React.Dispatch<React.SetStateAction<Language>>;
    }
  | undefined
>(undefined);

function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = React.useState<Language>("en");
  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

function useLang() {
  const context = React.useContext(LangContext);
  if (context === undefined) {
    throw new Error("useLang must be used within a LangProvider");
  }
  return context;
}

export { LangProvider, useLang };
export type { Language };

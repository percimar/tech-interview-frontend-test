import * as React from "react";

const NavContext = React.createContext<
  | {
      isOpen: Boolean;
      setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    }
  | undefined
>(undefined);

function NavProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState(true);
  return (
    <NavContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </NavContext.Provider>
  );
}

function useNav() {
  const context = React.useContext(NavContext);
  if (context === undefined) {
    throw new Error("useNav must be used within a NavProvider");
  }
  return context;
}

export { NavProvider, useNav };

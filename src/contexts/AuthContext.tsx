import * as React from "react";
import type { UserState } from "../models/User";

const AuthContext = React.createContext<
  | {
      user: UserState;
      setUser: (user: UserState) => void;
    }
  | undefined
>(undefined);

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<UserState>();

  // Check for stored user on load
  React.useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Override setUser to also store user in localStorage
  const setUserAndStore = (user: UserState) => {
    setUser(user);
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  };

  return (
    <AuthContext.Provider value={{ user: user, setUser: setUserAndStore }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
}

export { AuthProvider, useAuth };

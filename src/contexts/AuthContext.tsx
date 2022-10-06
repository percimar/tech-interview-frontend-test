import * as React from "react";

type User = { name: string }; // TODO: add more fields
type UserState = User | undefined;

const AuthContext = React.createContext<
  | {
      user: UserState;
      setUser: React.Dispatch<React.SetStateAction<UserState>>;
    }
  | undefined
>(undefined);

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<UserState>();
  return (
    <AuthContext.Provider value={{ user: user, setUser: setUser }}>
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
export type { User, UserState };

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { USERS, type User } from "@/mock/users";

type SafeUser = Omit<User, "password">;

type AuthContextValue = {
  user: SafeUser | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

const LS_KEY = "seller-dashboard.auth";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<SafeUser | null>(null);

  useEffect(() => {
    const raw = localStorage.getItem(LS_KEY);
    if (raw) setUser(JSON.parse(raw));
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      async login(username, password) {
        const found = USERS.find(
          (u) => u.username === username && u.password === password
        );
        if (!found) return false;

        const safe: SafeUser = {
          id: found.id,
          username: found.username,
          displayName: found.displayName,
        };

        setUser(safe);
        localStorage.setItem(LS_KEY, JSON.stringify(safe));
        return true;
      },
      logout() {
        setUser(null);
        localStorage.removeItem(LS_KEY);
      },
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}
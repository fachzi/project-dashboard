import { createContext, useEffect, useMemo, useState } from "react";
import { storage } from "../utils/storage";
import { logout as apiLogout } from "../services/auth";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [token, setToken] = useState(storage.getToken());
  const isAuthenticated = Boolean(token);

  useEffect(() => {
    if (token) storage.setToken(token);
    else storage.clearToken();
  }, [token]);

  const value = useMemo(
    () => ({
      token,
      isAuthenticated,
      login: (tkn) => setToken(tkn),
      logout: async () => {
        try { await apiLogout(); } catch {}
        setToken(null);
      },
    }),
    [token, isAuthenticated]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

const KEY = "auth_token";
export const storage = {
  getToken: () => localStorage.getItem(KEY),
  setToken: (token) => localStorage.setItem(KEY, token),
  clearToken: () => localStorage.removeItem(KEY),
};

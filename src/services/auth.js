import api from "./api";

export async function login({ username, password }) {
  // contoh API: ganti sesuai backend kamu
  const { data } = await api.post("/login", { username, password });
  // asumsi response { token: "..." }
  return data;
}

export async function logout() {
  try {
    await api.post("/logout");
  } catch {}
}

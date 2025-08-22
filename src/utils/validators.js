export const required = (v) => (v ? "" : "Field is required");
export const minLen = (n) => (v) =>
  v && v.length >= n ? "" : `Minimum ${n} characters`;

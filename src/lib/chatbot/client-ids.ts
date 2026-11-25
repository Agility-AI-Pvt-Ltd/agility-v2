const USER_KEY = "agility_chat_user_id";
const SESSION_KEY = "agility_chat_session_id";

function createId() {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (char) => {
    const rand = (Math.random() * 16) | 0;
    const value = char === "x" ? rand : (rand & 0x3) | 0x8;
    return value.toString(16);
  });
}

export function getChatUserId() {
  if (typeof window === "undefined") return "";
  const existing = window.localStorage.getItem(USER_KEY);
  if (existing) return existing;
  const id = createId();
  window.localStorage.setItem(USER_KEY, id);
  return id;
}

export function getChatSessionId() {
  if (typeof window === "undefined") return "";
  const existing = window.localStorage.getItem(SESSION_KEY);
  if (existing) return existing;
  const id = createId();
  window.localStorage.setItem(SESSION_KEY, id);
  return id;
}

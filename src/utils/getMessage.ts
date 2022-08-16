import { Bot } from "../types/Bot";

export function getMessage(this: Bot) {
  return this.notification?.entry?.[0]?.changes?.[0]?.value?.[0]?.messages[0];
}

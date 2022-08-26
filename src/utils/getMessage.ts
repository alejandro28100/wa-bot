import { Message } from "../types";
import { Bot } from "../types/Bot";

export function getMessage(this: Bot): Message | undefined {
  return this.notification?.entry?.[0]?.changes?.[0]?.value?.messages?.[0];
}

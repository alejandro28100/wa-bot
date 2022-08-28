import { Bot } from "../types";

export function onQuickReplyButtonAnswer(
  this: Bot,
  callback: () => void | Promise<void>
) {
  const subscriber = () => {
    const message = this.getMessage();
    return message?.type === "button";
  };
  return this.on(subscriber, callback);
}

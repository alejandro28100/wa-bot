import { getMessage, initialize, on } from "./utils";
import {
  Notification,
  Bot as BotInterface,
  ButtonMessage,
  AnswerFromListMessage,
} from "./types";

export class Bot implements BotInterface {
  stack = [];
  getMessage = getMessage;
  on = on;
  initialize = initialize;
  notification;
  constructor(notification: Notification) {
    this.notification = notification;
  }

  onListMessageAnswer(
    subscriberFn: (message: AnswerFromListMessage) => boolean,
    callback: () => void | Promise<void>
  ) {
    const subscriber = () => {
      const message = this.getMessage();
      return (
        message?.type === "interactive" &&
        "list_reply" in message?.interactive &&
        subscriberFn(message as AnswerFromListMessage)
      );
    };
    return this.on(subscriber, callback);
  }

  onQuickReplyButtonAnswer(
    subscriberFn: (message: ButtonMessage) => boolean,
    callback: () => void | Promise<void>
  ) {
    const subscriber = () => {
      const message = this.getMessage();
      if (message && message.type === "button") {
        return subscriberFn(message);
      }
      return false;
    };
    return this.on(subscriber, callback);
  }

  createFlow() {
    return new Bot(this.notification);
  }

  useFlow(flowInstance: Bot) {
    this.stack = [...this.stack, ...flowInstance.stack];
  }
}

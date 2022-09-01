import { getMessage, initialize, on } from "./utils";
import { Notification, Bot as BotInterface, ButtonMessage } from "./types";
import onListMessageAnswer from "./utils/onListMessageAnswer";

export class Bot implements BotInterface {
  stack = [];
  getMessage = getMessage;
  on = on;
  onListMessageAnswer = onListMessageAnswer;
  initialize = initialize;
  notification;
  constructor(notification: Notification) {
    this.notification = notification;
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

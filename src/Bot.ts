import { getMessage, initialize } from "./utils";
import {
  Notification,
  Bot as BotInterface,
  ButtonMessage,
  AnswerFromListMessage,
  EventSubscription,
  EventSubscriptionFunction,
  EventSubscriptionHandler,
  EventSubscriptionOnErrorHandler,
} from "./types";

export class Bot implements BotInterface {
  stack: EventSubscription[] = [];
  getMessage = getMessage;
  initialize = initialize;
  notification;
  constructor(notification: Notification) {
    this.notification = notification;
  }

  on(
    subscriber: EventSubscriptionFunction,
    callback: EventSubscriptionHandler,
    onError?: EventSubscriptionOnErrorHandler
  ) {
    if (typeof subscriber !== "function")
      throw new Error("subscriber must be a function");

    if (typeof callback !== "function")
      throw new Error("callback handler must be a function");

    this.stack.push([subscriber, callback, onError]);
  }

  onListMessageAnswer(
    subscriberFn: (message: AnswerFromListMessage) => boolean,
    callback: () => void | Promise<void>,
    onError?: EventSubscriptionOnErrorHandler
  ) {
    const subscriber = () => {
      const message = this.getMessage();
      return (
        message?.type === "interactive" &&
        "list_reply" in message?.interactive &&
        subscriberFn(message as AnswerFromListMessage)
      );
    };
    return this.on(subscriber, callback, onError);
  }

  onQuickReplyButtonAnswer(
    subscriberFn: (message: ButtonMessage) => boolean,
    callback: () => void | Promise<void>,
    onError?: EventSubscriptionOnErrorHandler
  ) {
    const subscriber = () => {
      const message = this.getMessage();
      if (message && message.type === "button") {
        return subscriberFn(message);
      }
      return false;
    };
    return this.on(subscriber, callback, onError);
  }

  createFlow() {
    return new Bot(this.notification);
  }

  useFlow(flowInstance: Bot) {
    this.stack = [...this.stack, ...flowInstance.stack];
  }
}

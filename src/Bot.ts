import { getMessage, initialize, on, onQuickReplyButtonAnswer } from "./utils";
import { Notification, Bot as BotInterface } from "./types";
import onListMessageAnswer from "./utils/onListMessageAnswer";

export class Bot implements BotInterface {
  stack = [];
  getMessage = getMessage;
  on = on;
  onListMessageAnswer = onListMessageAnswer;
  onQuickReplyButtonAnswer = onQuickReplyButtonAnswer;
  initialize = initialize;
  notification;
  constructor(notification: Notification) {
    this.notification = notification;
  }
}

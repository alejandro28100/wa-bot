import { getMessage, handle, initialize, on } from "./utils";
import { Notification, Bot as BotInterface } from "./types";
import onListMessageAnswer from "./utils/onListMessageAnswer";

export class Bot implements BotInterface {
  stack = [];
  handle = handle;
  getMessage = getMessage;
  on = on;
  onListMessageAnswer = onListMessageAnswer;
  initialize = initialize;
  notification;
  constructor(notification: Notification) {
    this.notification = notification;
  }
}

import { getMessage, handle, initialize, on } from "./utils";
import { Notification, Bot as BotInterface } from "./types";

export class Bot implements BotInterface {
  stack = [];
  handle = handle;
  getMessage = getMessage;
  on = on;
  initialize = initialize;
  notification;
  constructor(notification: Notification) {
    this.notification = notification;
  }
}

import { Bot, Notification } from "./types";

import { handle, init, on } from "./utils";

export const createBot = function (this: Bot, notification: Notification) {
  this.notification = notification;
  this._stack = [];

  return {
    on: on,
    handle: handle,
    init: init,
  };
};

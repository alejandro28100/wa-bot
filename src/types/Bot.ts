import { Notification } from "./index";

/** A function to determine whether the subscription will be set.
 *
 * The function will have access to the bot methods and the notification object.
 * */
export type EventSubscriptionFunction = (bot: Bot) => boolean;

export type EventSubscription = [
  EventSubscriptionFunction,
  (bot: Bot) => void | Promise<void>
];

export type Bot = {
  notification: Notification;
  _stack: EventSubscription[];
  handle: (event: EventSubscription) => void | Promise<void>;
};

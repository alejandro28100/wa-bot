import { Notification } from "./index";
/** A function to determine whether the subscription will be set.
 * */
export type EventSubscriptionFunction = () => boolean;
export type EventSubscriptionHandler = () => void | Promise<void>;

export type EventSubscription = [
  EventSubscriptionFunction,
  EventSubscriptionHandler
];

export type Bot = {
  notification: Notification;
  stack: EventSubscription[];
  handle: (event: EventSubscription) => void | Promise<void>;
  on: (
    subscriber: EventSubscriptionFunction,
    callback: EventSubscriptionHandler
  ) => void;
  initialize: () => Promise<void>;
};

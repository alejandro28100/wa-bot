import { Notification, Message } from "./index";
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
  getMessage: () => Message | undefined;
  on: (
    subscriber: EventSubscriptionFunction,
    callback: EventSubscriptionHandler
  ) => void;
  onListMessageAnswer: (callback: () => void | Promise<void>) => void;
  onQuickReplyButtonAnswer: (callback: () => void | Promise<void>) => void;
  initialize: () => Promise<void>;
};

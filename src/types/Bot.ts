import { Notification, Message, ButtonMessage } from "./index";
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
  getMessage: () => Message | undefined;
  on: (
    subscriber: EventSubscriptionFunction,
    callback: EventSubscriptionHandler
  ) => void;
  onListMessageAnswer: (
    subscriberFn: (message: Message) => boolean,
    callback: () => void | Promise<void>
  ) => void;
  onQuickReplyButtonAnswer: (
    subscriberFn: (message: ButtonMessage) => boolean,
    callback: () => void | Promise<void>
  ) => void;
  initialize: () => Promise<void>;
};

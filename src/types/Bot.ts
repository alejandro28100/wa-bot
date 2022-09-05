import { Notification, Message, ButtonMessage } from "./index";
/** A function to determine whether the subscription will be set.
 * */

export type EventSubscriptionFunction = () => boolean;
export type EventSubscriptionHandler = () => void | Promise<void>;

type onErrorParams = {
  error: unknown;
  message: Message;
};
export type EventSubscriptionOnErrorHandler = (
  params: onErrorParams
) => void | Promise<void>;

export type EventSubscription = [
  EventSubscriptionFunction,
  EventSubscriptionHandler,
  EventSubscriptionOnErrorHandler?
];
export type Bot = {
  notification: Notification;
  stack: EventSubscription[];
  getMessage: () => Message | undefined;
  onListMessageAnswer: (
    subscriberFn: (message: Message) => boolean,
    callback: () => void | Promise<void>,
    onError?: EventSubscriptionOnErrorHandler
  ) => void;
  onQuickReplyButtonAnswer: (
    subscriberFn: (message: ButtonMessage) => boolean,
    callback: () => void | Promise<void>,
    onError?: EventSubscriptionOnErrorHandler
  ) => void;
  initialize: () => Promise<void>;
};

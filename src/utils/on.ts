import { Bot, EventSubscriptionFunction } from "../types/Bot";

export function on(
  this: Bot,
  subscriber: EventSubscriptionFunction,
  callback: () => void
) {
  if (typeof subscriber !== "function")
    throw new Error("subscriber must be a function");

  if (typeof callback !== "function")
    throw new Error("callback handler must be a function");

  this._stack.push([subscriber, callback]);
}

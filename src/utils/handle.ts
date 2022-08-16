import { Bot, EventSubscription } from "../types/Bot";

// Make the handle function async so multiple events can be handled one after another.
export async function handle(this: Bot, event: EventSubscription) {
  const [subscription, handler] = event;
  try {
    const matchesElement = subscription(this);
    if (matchesElement) {
      return handler(this);
    }
  } catch (error) {
    console.error(error);
  }
}

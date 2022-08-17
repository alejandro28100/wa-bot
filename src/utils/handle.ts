import { EventSubscription } from "../types/Bot";

// Make the handle function async so multiple events can be handled one after another.
export async function handle(event: EventSubscription) {
  const [subscription, handler] = event;
  try {
    const matchesElement = subscription();
    if (matchesElement) {
      return handler();
    }
  } catch (error) {
    console.error(error);
  }
}

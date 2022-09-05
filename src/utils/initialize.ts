import { Message } from "../types";
import { Bot } from "../types/Bot";

export async function initialize(this: Bot): Promise<void> {
  for (let index = 0; index < this.stack.length; index++) {
    const currentEvent = this.stack[index];
    const [subscription, handler, onError] = currentEvent;
    try {
      const matchesElement = subscription();
      if (matchesElement) {
        return handler();
      }
    } catch (error) {
      if (onError) {
        onError({ error, message: this.getMessage() as Message });
      }
    }
  }
}

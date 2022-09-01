import { Bot } from "../types/Bot";

export async function initialize(this: Bot): Promise<void> {
  for (let index = 0; index < this.stack.length; index++) {
    const currentEvent = this.stack[index];
    const [subscription, handler] = currentEvent;
    try {
      const matchesElement = subscription();
      if (matchesElement) {
        return handler();
      }
    } catch (error) {
      console.error(error);
    }
  }
}

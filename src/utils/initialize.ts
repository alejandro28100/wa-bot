import { Bot } from "../types/Bot";

export async function initialize(this: Bot): Promise<void> {
  for (let index = 0; index < this.stack.length; index++) {
    const currentEvent = this.stack[index];
    try {
      await this.handle(currentEvent);
    } catch (error) {
      console.error(error);
    }
  }
}

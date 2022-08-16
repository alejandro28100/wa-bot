import { Bot } from "../types/Bot";

export async function init(this: Bot) {
  for (let index = 0; index < this._stack.length; index++) {
    const currentEvent = this._stack[index];
    await this.handle(currentEvent);
  }
}

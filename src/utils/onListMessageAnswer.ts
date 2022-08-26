import { Bot } from "../types";

function onListMessageAnswer(this: Bot, callback: () => void | Promise<void>) {
  const subscriber = () => {
    const message = this.getMessage();
    return (
      message?.type === "interactive" && "list_reply" in message?.interactive
    );
  };
  return this.on(subscriber, callback);
}

export default onListMessageAnswer;

type Message = {
  /**phone number if */
  from: string;
  /** wamid.ID*/
  id: string;
  /**timestamp*/
  timestamp: string;
};
type TextMessage = Message & {
  type: "text";
  text: {
    body: string;
  };
};

type MediaMessage = Message & {
  type: "media";
  image: {
    caption: string;
    mime_type: string;
    sha256: string;
    id: string;
  };
};

/**An interactive message can represent either:
 *
 *  When a user clicks a reply button sent
 * {@link AnswerFromListMessage}
 *
 * When a user clicks on an item from a list message
 * {@link ReplyButtonMessage}
 * */
export type InteractiveMessage = AnswerFromListMessage | ReplyButtonMessage;

export type InteractiveMessageBase<T> = Message & {
  type: "interactive";
  interactive: T;
};

/** When a user clicks a reply button you sent */
export type ReplyButtonMessage = InteractiveMessageBase<{
  button_reply: {
    id: string;
    title: string;
  };
  type: "button_reply";
}>;

/**When a user clicks on an item from a list message */
export type AnswerFromListMessage = InteractiveMessageBase<{
  list_reply: {
    id: string;
    title: string;
    description: string;
  };
  type: "list_reply";
}>;

/** When a user clicks a reply button in an interactive message template */
export type ButtonMessage = {
  type: "button";
  button: {
    text: string;
    payload: string;
  };
};

export type MessageTypes =
  | TextMessage
  | MediaMessage
  | InteractiveMessage
  | ButtonMessage;

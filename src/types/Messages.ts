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

type InteractiveMessage = Message & {
  type: "interactive";
  interactive: AnswerFromListMessage | ReplyButtonMessage;
};

/** Response of a reply button sent */
type ReplyButtonMessage = {
  button_reply: {
    id: string;
    title: string;
  };
  type: "button_reply";
};

type AnswerFromListMessage = {
  list_reply: {
    id: string;
    title: string;
    description: string;
  };
  type: "list_reply";
};

/** Quick reply button in an interactive message template */
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

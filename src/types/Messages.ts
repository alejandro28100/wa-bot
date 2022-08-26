type TextMessage = {
  type: "text";
  text: {
    body: string;
  };
  image: never;
  interactive: never;
  button: never;
};

type MediaMessage = {
  type: "media";
  image: {
    caption: string;
    mime_type: string;
    sha256: string;
    id: string;
  };
  interactive: never;
  button: never;
  text: never;
};

type InteractiveMessage = {
  type: "interactive";
  interactive: AnswerFromListMessage | ReplyButtonMessage;
  text: never;
  image: never;
  button: never;
};

type ReplyButtonMessage = {
  button_reply: {
    id: string;
    title: string;
  };
  type: string;
  list_reply: never;
};

type AnswerFromListMessage = {
  list_reply: {
    id: string;
    title: string;
    description: string;
  };
  type: "list_reply";
  button_reply: never;
};

type ButtonMessage = {
  type: "button";
  button: {
    text: string;
    payload: string;
  };
  interactive: never;
  text: never;
  image: never;
};

export type MessageTypes =
  | TextMessage
  | MediaMessage
  | InteractiveMessage
  | ButtonMessage;

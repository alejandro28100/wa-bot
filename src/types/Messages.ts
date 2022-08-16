type TextMessage = {
  type: "text";
  text: {
    body: string;
  };
};

type MediaMessage = {
  type: "media";
  image: {
    caption: string;
    mime_type: string;
    sha256: string;
    id: string;
  };
};

type InteractiveMessage = {
  type: "interactive";
  interactive: AnswerFromListMessage | ReplyButtonMessage;
};

type ReplyButtonMessage = {
  button_reply: {
    id: string;
    title: string;
  };
  type: string;
};

type AnswerFromListMessage = {
  list_reply: {
    id: string;
    title: string;
    description: string;
  };
  type: "list_reply";
};

type ButtonMessage = {
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

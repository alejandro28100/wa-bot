import { MessageTypes } from "./index";

export type Notification = {
  object: "whatsapp_business_account";
  entry: NotificationEntry[];
};

type NotificationEntry = {
  /** Your whatsapp business account id */
  id: string;
  changes: MessagesNotificationChange[];
};

type MessagesNotificationChange = {
  value: NotificationChangeValue[];
  field: "messages";
};

type NotificationChangeValue = {
  metadata: ChangeMetadata;
} & (MessagesNotificationChangeValue | StatusesNotificationChangeValue);

type ChangeMetadata = {
  display_phone_number: string;
  phone_number_id: string;
};

type StatusesNotificationChangeValue = {
  statuses: Status[];
  messages: never;
};

type Status = {
  status: string;
  timestamp: string;
  id: string;
  recipient_id: string;
};

type MessagesNotificationChangeValue = {
  messages: Message[];
  statuses: never;
};

export type Message = MessageTypes & {
  from: string;
  id: string;
  timestamp: string;
};

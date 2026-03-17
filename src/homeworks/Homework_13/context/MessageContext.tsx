import { createContext } from "react";

type MessageContextType = {
  message: string;
  setMessage: (msg: string) => void;
};

export const MessageContext = createContext<MessageContextType>({
  message: "",
  setMessage: () => {},
});
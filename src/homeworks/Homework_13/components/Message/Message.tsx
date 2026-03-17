import { useContext } from "react";
import { MessageContext } from "../../context/MessageContext";

function Message() {
  const { message } = useContext(MessageContext);

  return <p>{message}</p>;
}

export default Message;
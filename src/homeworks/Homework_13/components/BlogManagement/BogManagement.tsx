import { useContext, useState } from "react";
import { MessageContext } from "../../context/MessageContext";
import Card from "../Card/Card";

function BlogManagement() {
  const { setMessage } = useContext(MessageContext);
  const [inputValue, setInputValue] = useState("");

  const handlePost = () => {
    setMessage(inputValue);
    setInputValue("");
  };

  return (
    <div>
      <textarea
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Введите сообщение..."
      />

      <br />

      <button onClick={handlePost}>Запостить</button>

      <Card />
    </div>
  );
}

export default BlogManagement;
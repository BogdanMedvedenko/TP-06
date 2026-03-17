import Message from "../Message/Message";

function Card() {
  return (
    <div style={{ border: "1px solid black", padding: "10px", marginTop: "20px" }}>
      <h3>Иван Иванов</h3>

      <Message />
    </div>
  );
}

export default Card;

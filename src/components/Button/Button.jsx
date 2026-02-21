import "./styles.css";

function Button({ name = "Send", type = "button", onClick = () => {} }) {
  return (
    <button  className="button_component" type={type} onClick={onClick}>
      {name}
    </button>
  );
}

export default Button;

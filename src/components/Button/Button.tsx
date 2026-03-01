import { type ButtonProps } from "./types";
import { ButtonComponent } from "./styles";

function Button({
  name = "Send",
  type = "button",
  onClick = () => {},
  isRed = false,
  disabled = false,
}: ButtonProps) {
  return (
    <ButtonComponent
      disabled={disabled}
      $isRed={isRed}
      type={type}
      onClick={onClick}
    >
      {name}
    </ButtonComponent>
  );
}

export default Button;


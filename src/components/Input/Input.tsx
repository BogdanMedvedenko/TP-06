import { type InputProps } from "./types";
import { InputWrapper, InputLabel, InputComponent, ErrorMessage } from "./styles";

function Input({
  id,
  name,
  type = "text",
  placeholder,
  label,
  disabled = false,
  error = undefined,
  value,
  onChange
}: InputProps) {
  return (
    <InputWrapper>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <InputComponent
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        $error={error}
        value={value}
        onChange={onChange}
      />
      {/* Условный рендеринг
      - если слева от && стоит false, то элемент справа от && на странице не показывается(т.е скрывается)
      - если слева от && стоит true, то элемент справа от && на странице показывается */}
      {!!error && <ErrorMessage>{error}</ErrorMessage>}
    </InputWrapper>
  );
}

export default Input;

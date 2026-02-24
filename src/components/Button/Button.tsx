import styled from "@emotion/styled";

interface ButtonProps {
  disabled?: boolean;
  isRed?: boolean;
}

const StyledButton = styled.button<ButtonProps>`
  padding: 10px 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  color: white;
  font-size: 14px;

  background-color: ${(props) =>
    props.disabled
      ? "#9e9e9e"
      : props.isRed
      ? "#d32f2f"
      : "#1976d2"};

  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.7 : 1)};
`;

export const Button = ({ disabled, isRed }: ButtonProps) => {
  return (
    <StyledButton disabled={disabled} isRed={isRed}>
      Button
    </StyledButton>
  );
};

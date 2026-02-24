import styled from "@emotion/styled";

interface InputProps {
  disabled?: boolean;
  error?: string;
}

const StyledInput = styled.input<InputProps>`
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 14px;
  outline: none;

  border: 2px solid
    ${(props) => (props.error ? "#d32f2f" : "#ccc")};

  background-color: ${(props) =>
    props.disabled ? "#eeeeee" : "white"};

  cursor: ${(props) =>
    props.disabled ? "not-allowed" : "text"};
`;

const ErrorText = styled.div`
  color: #d32f2f;
  font-size: 12px;
  margin-top: 4px;
`;

export const Input = ({ disabled, error }: InputProps) => {
  return (
    <div>
      <StyledInput disabled={disabled} error={error} />
      {error && <ErrorText>{error}</ErrorText>}
    </div>
  );
};
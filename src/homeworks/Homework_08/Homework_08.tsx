import styled from "@emotion/styled";

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 22px;
  margin-bottom: 15px;
`;

const Button = styled.button`
  padding: 8px 14px;
  background-color: #1976d2;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #115293;
  }
`;

export const Homework_08 = () => {
  return (
    <Wrapper>
      <Title>Homework 08</Title>
      <Button>Click me</Button>
    </Wrapper>
  );
};
export default Homework_08;

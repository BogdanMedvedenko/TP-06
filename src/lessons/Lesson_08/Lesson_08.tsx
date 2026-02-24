import styled from "@emotion/styled";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

export const Homework_08 = () => {
  return (
    <Wrapper>
      <h2>Buttons</h2>

      <Button />
      <Button isRed />
      <Button disabled />
      <Button isRed disabled />

      <h2>Inputs</h2>

      <Input />
      <Input disabled />
      <Input error="Some error" />
      <Input disabled error="Some error" />
    </Wrapper>
  );
};

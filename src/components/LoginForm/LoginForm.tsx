import { type ChangeEvent, useState } from "react";

import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

import { LoginFormContainer, InputsContainer, Title } from "./styles";

function LoginForm() {
  // // ШАГ2: Создаем стейт для нашего инпута, чтобы его контрлировать и иметь доступ к введенным пользователем данным
  // const [inputValue, setInputValue] = useState<string>("");

  // // ШАГ 3:  создаем функцию, которая будет выполнять на событие onChange
  // const onChangeInputValue = (event: ChangeEvent<HTMLInputElement>) => {
  //   setInputValue(event.target.value);
  // };
  // console.log(inputValue)

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const changeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const changePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  console.log(email, password);

  const login = (event: any) => {
    event.preventDefault();
    console.log("Email", email);
    console.log("Password", password);
  };

  return (
    <LoginFormContainer onSubmit={login}>
      <Title>Login form</Title>
      <InputsContainer>
        <Input
          id="email-id"
          name="email"
          type="email"
          placeholder="Enter your email"
          label="Email"
          value={email}
          onChange={changeEmail}
        />
        <Input
          id="password-id"
          name="password"
          type="password"
          placeholder="Enter your password"
          label="Password"
          value={password}
          onChange={changePassword}
        />
        {/* <input
          placeholder="Enter something"
          onChange={onChangeInputValue}
          value={inputValue}
        /> */}
      </InputsContainer>
      <Button name="Login" type="submit" />
    </LoginFormContainer>
  );
}

export default LoginForm;

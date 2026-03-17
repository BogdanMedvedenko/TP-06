import { useState } from "react";
import Button from "../../../../components/Button/Button"

import Section from "../Section/Section";
import { MainTitle, MainWrapper } from "./styles";
import { type UserData } from "./types";

function Main() {
  const [userData, setUserData] = useState<undefined | UserData>(undefined);

  const getUserData = () => {
    // Предположим, что вы получили данные пользователя в константе userResponse, используя GET запрос по сети
    const userResponse: UserData = {
      fullName: "John Johnson",
      age: 30,
      jobPosition: "QA",
    };

    setUserData(userResponse);
  };

  console.log(userData);
  return (
    <MainWrapper>
      <MainTitle>Main Component</MainTitle>
      <Button name="Get User Data" onClick={getUserData} />
      <Section />
    </MainWrapper>
  );
}

export default Main;

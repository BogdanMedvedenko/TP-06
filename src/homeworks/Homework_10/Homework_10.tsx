import { useEffect, useState, type ChangeEvent } from "react";
import axios from "axios";
import { v4 } from "uuid";

import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

import { PageWrapper, ContainerFacts, Card, Text, ErrorText } from "./styles";

function Homework_10() {
  const [search, setSearch] = useState<string>("");
  const [catfact, setCatFact] = useState<string[]>([]);
  const [error, setError] = useState<undefined | string>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  const jokes_URL: string = "https://official-joke-api.appspot.com/random_joke";

  const getJokes = async () => {
    try {
      // Выпонляем код по успешно пришедшим данным на наш запрос, т.е когда Promise Result === fullfiled
      setIsLoading(true);
      const response = await axios.get(jokes_URL);
      console.log(response.data.joke);
     
      const joke = `${response.data.setup} ${response.data.punchline}`;

setCatFact((prev: string[]) => [...prev, joke]);
    } catch (error: any) {
      // Выпонляем код, когда нам пришла ощибка, т.е когда Promise Result === rejected
      setError("Some Network error");
    } finally {
      // Выполнятся всегда, не важно status === fullfiled или rejected
      setIsLoading(false);
    }
  };
const jokes = catfact.map((jokes: string) => {
    return <Text key={v4()}>{jokes}</Text>;
  });

  useEffect(() => {
    getJokes();
  }, []);

  // MOUNTING
  // 1 аргумент - функция, которая должна выполниться в определенный жизненный этап компонента
  // 2 аргумент - массив зависимостей, с помощью него мы может определить жизненный этап компонента
  // Если мы прокидываем пустой массив во 2 аргументе, то мы определяем 1 этап жизненного цикла компонента - MOUNTING
  // useEffect(() => {
  //   // Например в MOUNTING можно отправить запрос на сервер при загрузке страницы(т.е первичный рендеринг)
  //   console.log("MOUNTING!!!");
  // }, []);

  // // UPDATING
  // useEffect(() => {
  //   if (search !== "") {
  //     console.log("UPDATING!!!");
  //   }
  // }, [search]);

  // // UNMOUNTING
  // useEffect(() => {
  //   return () => {
  //     console.log("UMOUNTING!!!")
  //   }
  // }, [])

  return (
    <PageWrapper>
      <Card>
        {/* <Input
          id="serch_input"
          name="search"
          placeholder="Enter your request"
          label="Search"
          value={search}
          onChange={onSearch}
        /> */}
        <ContainerFacts>
          {!!catfact && jokes}
          {!!error && <ErrorText>{error}</ErrorText>}
        </ContainerFacts>
        <Button disabled={isLoading} name="Get jokes" onClick={getJokes} />
      </Card>
    </PageWrapper>
  );
}

export default Homework_10;

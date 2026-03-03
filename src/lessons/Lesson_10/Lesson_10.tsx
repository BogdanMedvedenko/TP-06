import { useEffect, useState, type ChangeEvent } from "react";
import axios from "axios";
import { v4 } from "uuid";

import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

import { PageWrapper, ContainerFacts, Card, Text, ErrorText } from "./styles";

function Lesson_10() {
  const [search, setSearch] = useState<string>("");
  const [catfact, setCatFact] = useState<string[]>([]);
  const [error, setError] = useState<undefined | string>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  const CAT_FACT_URL: string = "https://catfact.ninja/fact";

  const getCatFact = async () => {
    try {
      // Выпонляем код по успешно пришедшим данным на наш запрос, т.е когда Promise Result === fullfiled
      setIsLoading(true);
      const response = await axios.get(CAT_FACT_URL);
      console.log(response.data.fact);
      setCatFact((prevValue: string[]) => {
        return [...prevValue, response.data.fact];
      });
    } catch (error: any) {
      // Выпонляем код, когда нам пришла ощибка, т.е когда Promise Result === rejected
      setError("Some Network error");
    } finally {
      // Выполнятся всегда, не важно status === fullfiled или rejected
      setIsLoading(false);
    }
  };

  const catFacts = catfact.map((fact: string) => {
    return <Text key={v4()}>{fact}</Text>;
  });

  useEffect(() => {
    getCatFact();
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
          {!!catfact && catFacts}
          {!!error && <ErrorText>{error}</ErrorText>}
        </ContainerFacts>
        <Button disabled={isLoading} name="Get cat fact" onClick={getCatFact} />
      </Card>
    </PageWrapper>
  );
}

export default Lesson_10;

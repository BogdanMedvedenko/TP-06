import { useState } from "react";
import axios from "axios";

import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

import { PageWrapper, Text, Card, ContainerUniniversytet } from "./styles";

// 🔹 Тип одного университета из API
interface University {
  name: string;
  country: string;
  web_pages: string[];
}

function Lesson_11() {
  const [country, setCountry] = useState<string>("");
  const [universities, setUniversities] = useState<University[]>([]);
  const [error, setError] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getUniversities = async () => {
    if (!country) return;

    try {
      setIsLoading(true);
      setError(undefined);
      setUniversities([]);

      const response = await axios.get<University[]>(
        "http://universities.hipolabs.com/search",
        {
          params: {
            country: country,
          },
        }
      );

      setUniversities(response.data.slice(0, 15)); // Ограничиваем количество отображаемых университетов до 10
    } catch (error: any) {
      setError("Some Network Error");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  };

  return (
    <PageWrapper>
      <Card>
        <Text>Search University</Text>

        <Input
          id="country"
          name="country"
          placeholder="Enter country name of university..."
          label="Country"
          value={country}
          onChange={handleChange}
        />

        <Button
          disabled={isLoading || !country}
          name={isLoading ? "Loading..." : "Get Universities"}
          onClick={getUniversities}
        />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <ContainerUniniversytet>
          {universities.map((item, index) => (
            <li key={index}>
              <strong>{item.name}</strong> — {item.country}
              <br />
              <a href={item.web_pages[0]} target="_blank" rel="noreferrer">
                {item.web_pages[0]}
              </a>
            </li>
          ))}
        </ContainerUniniversytet>
      </Card>
    </PageWrapper>
  );
}

export default Lesson_11;
import { useState } from "react";

import Button from "components/Button/Button";
import Input from "components/Input/Input";
import Counter from "components/Counter/Counter";

import "./styles.css";
import { WEATHER_CODES } from "./types";

// !! Есть 2 основных способа вызова перерендера(обновления) компонента:
// 1 - изменения state(посредством вызова функции setState())
// 2 - изменение props

function Lesson_07() {
  // 12. enum
  // Создайте функцию, которая бы принимала следующие параметры:
  //   код погоды и функция decode, которая дает расшифровку погоды по коду.
  //   Функция должна возвращать строку, описывающую погоду. Таблица соответствия
  //   код-описание: SQ – шквал PO – пыльный вихрь FC - торнадо BR – дымка
  //   (видимость от 1 до 9 км) HZ – мгла (видимость менее 10 км) FU – дым
  //   (видимость менее 10 км) DS - пыльная буря (видимость менее 10 км) SS -
  //   песчаная буря (видимость менее 10 км) Подсказка: удобно использовать в
  //   одном из методов switch-case:

  const decode = (weatherCode: string): string => {
    switch (weatherCode) {
      case WEATHER_CODES.SQ: {
        return "шквал";
      }
      case WEATHER_CODES.PO: {
        return "пыльный вихрь";
      }
      case WEATHER_CODES.FC: {
        return "торнадо";
      }
      case WEATHER_CODES.BR: {
        return "дымка (видимость от 1 до 9 км)";
      }
      case WEATHER_CODES.HZ: {
        return "мгла (видимость менее 10 км)";
      }
      case WEATHER_CODES.FU: {
        return "дым (видимость менее 10 км)";
      }
      case WEATHER_CODES.DS: {
        return "пыльная буря (видимость менее 10 км)";
      }
      case WEATHER_CODES.SS: {
        return "песчаная буря (видимость менее 10 км) ";
      }
      default:
        return "This code doesn't exist";
    }
  };

  const weather = decode(WEATHER_CODES.PO);
  console.log(weather);

  ///////////////////////////////////////////////////////////////////////////////
  // 13. Generic
  // До использования Generic
  // const stringArray: string[] = ["a", "b", "c"];
  // const numbersArray: number[] = [1, 2, 3];
  // const booleanArray: boolean[] = [true, false, true];

  // После использования Generic
  type ArrayGenerator<Type> = Type[];

  const stringArray: ArrayGenerator<string> = ["a", "b", "c"];
  const numbersArray: ArrayGenerator<number> = [1, 2, 3];
  const booleanArray: ArrayGenerator<boolean> = [true, false, true];

  // Generic with objects

  interface Item3Value {
    model: string;
    articul: number;
  }

  interface Item<ValueType> {
    type: string;
    value: ValueType;
  }

  const item1: Item<number> = {
    type: "TV",
    value: 123456789,
  };

  const item2: Item<string> = {
    type: "PC",
    value: "Xiaomi Model 123",
  };

  const item3: Item<Item3Value> = {
    type: "PC",
    value: {
      model: "Apple Pro Book",
      articul: 123542525135135,
    },
  };

  const [count, setCount] = useState<number>(0);

  const onMinus = (): void => {
    setCount((prevValue: number) => {
      return prevValue - 1;
    });
  };

  const onPlus = (): void => {
    setCount((prevValue: number) => {
      return prevValue + 1;
    });
  };

  const sendCounterResult = () => {
    // Представим что мы должны отправить резульат счетчика на сервер и нам нужен к нему доступ
    console.log("Доступ к счетчику в компоненте Lesson_07, результат:", count);
  };

  return (
    <div className="lesson_07_page_wrapper">
      <Button name="Sipmple Button" onClick={sendCounterResult} />
      <Input
        id="simple-input"
        name="simpleInput"
        placeholder="Eneter something"
        label="Simple Input"
      />
      <Counter count={count} onMinus={onMinus} onPlus={onPlus} />
    </div>
  );
}

export default Lesson_07;

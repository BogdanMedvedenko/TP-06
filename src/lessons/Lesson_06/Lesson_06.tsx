function Lesson_06() {
  // 1 тип: string - строковый
  let userFullName: string = "John Johnson";

  // userFullName = 30; // будет ошибка!!!

  let hello = `Hello. ${userFullName}`; //  если мы явно не прописываем тип переменной, то тип назначается автоматически, в зависимости от того, какое значение было переданно изначально для переменной
  //   hello = 300; // будет ошибка

  ///////////////////////////////////////////////////////////////////////////////////////////
  // 2 тип number - числовой
  let number1: number = 100;

  let number2: number = 39.5;

  // number1 = "Hello" // Будет ошибка

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // 3 тип - boolean
  let isAdmin: boolean = true;

  isAdmin = false;

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // 4 тип - массив
  //   const animals: string[] = ["Tiger", "Lion", "Dog"];

  //   animals.push(30); // будет ошибка

  const numbers: number[] = [1, 2, 3, 4, 5];

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // 5 - tupel

  const userAray: [
    string,
    string,
    string,
    number,
    string,
    string,
    string,
    number,
  ] = ["name", "John", "age", 30, "name", "Pavel", "age", 40];

  //   userAray[0] = true // будет ошибка

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // 6 functions

  // функция, которая что-то выполняет, но ничего не возвращает
  const sayHi = (personName: string): void => {
    console.log(`Hello, ${personName}`);
  };

  // функция, которая возвращает сумму 2 чисел
  const add = (a: number, b: number): number => {
    return a + b;
  };

  add(10, 5); // корректное использование функции
  //   add(3, "qwe"); // будет ошибка

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // 7 any
  let anyVariable: any = "Hello";
  anyVariable = 300;
  anyVariable = true;

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // 8 null и undefined

  let userName: null | undefined;
  //   userName = "qwe"; // будет ошибка

  //////////////////////////////////////////////////////////////////////////////////////////////////////
  // 9 Objects
  interface Admin {
    isAdmin: boolean;
  }

  interface User extends Admin {
    fullName: string;
    age: number;
    job: string;
    pet?: string;
  }

  // Можно дописать св-ва в интерфейсе
  interface User {
    isFamily: boolean;
  }

  const user1: User = {
    fullName: "John Johnson",
    age: 30,
    job: "QA",
    pet: "Max",
    isAdmin: true,
    isFamily: true,
  };

  const user2: User = {
    fullName: "Brat Pitt",
    age: 30,
    job: "Frontend",
    isAdmin: true,
    isFamily: true,
  };

  // 10 type

  type GlobalAnimalProps = {
    isAnimal: boolean;
  };

  type Animal = {
    type: string;
    age: number;
    color: string;
    isWild: boolean;
  };

  const animals: GlobalAnimalProps | Animal = {
    isAnimal: true,
    type: "Tiger",
    age: 12,
    color: "orange",
    isWild: true,
  };

  //type позволяет создавать собственные типы или комбинации типов
  type UserDataFromServer = null | undefined | User;

  let userData: UserDataFromServer = undefined;
  userData = null;

  userData = user1;

  return <div>Lesson_06</div>;
}

export default Lesson_06;

// ШАГ 1: Импортируем useFormik из библиотеки formik
import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

import { LoginFormContainer, InputsContainer, Title } from "./styles";
import { LOGIN_FORM_VALUES } from "./types";

// Валидация с помощью yup
const validationSchema = Yup.object().shape({
  [LOGIN_FORM_VALUES.EMAIL]: Yup.string()
    .required("Email field is required")
    .email("This field should be in email format"),
  [LOGIN_FORM_VALUES.PASSWORD]: Yup.string()
    .required("Password field is required")
    .min(5, "Password field should contain min 5 characters")
    .max(20, "Password field should contain max 20 characters"),
});

function LoginForm() {
  // const [email, setEmail] = useState<string>("");
  // const [password, setPassword] = useState<string>("");

  // const changeEmail = (event: ChangeEvent<HTMLInputElement>) => {
  //   setEmail(event.target.value);
  // };

  // const changePassword = (event: ChangeEvent<HTMLInputElement>) => {
  //   setPassword(event.target.value);
  // };

  // console.log(email, password);

  // const login = (event: any) => {
  //   event.preventDefault();
  //   console.log("Email", email);
  //   console.log("Password", password);
  // };

  //////////////////////////////////////////////////////////////////////////////////////////////////////////
  // ШАГ 2: Создаем обьект formik
  // useFormik - функция хук, которая возвращает обьект, в котором прописанны необходимые данные о форме и вспомогательные функции для работы с формой
  // useFormik принимает в качестве аргумента обьект, этот аргумент является обязательным
  // обьект, который мы передаем useFormik нужен для настройки обьекта, который возвращает хук useFormik
  // обьект, который мы передаем useFromik имеет 2 обязательных ключа:
  // 1. initialValues - значения элементов формы по умолчанию, принимает в качетсве значени обьект:
  // - в качетве ключа у нас выступает значение атрибута name в элементах формы
  // - в качетве значения ключа, мы прописываем значения по умолчанию, которые должны быть у элементов формы
  // 2. onSubmit - эта функция, которая вызывается на событие submit(при клике на кнопку с типом submit)
  const formik = useFormik({
    initialValues: {
      [LOGIN_FORM_VALUES.EMAIL]: "",
      [LOGIN_FORM_VALUES.PASSWORD]: "",
    },
    validationSchema: validationSchema,
    validateOnChange: false,
    onSubmit: (values, helpers) => {
      console.log("Formik submit event works!!!");
      console.log(values);
      console.log(helpers);
      // Вспомогательные функции, которые мы можем использовать во время события submit
      // апример helpers.resetForm() - очищает значения в форме(т.е делает значения формы по умолчанию)
      helpers.resetForm();
    },
  });

  console.log(formik);

  return (
    // formik.handkeSubmit - мы прописываем для того, чтобы когда мы нажали на кнопку с type="submit",
    // у нас вызвалась фнукция, которую мы прописали в onSubmit
    <LoginFormContainer onSubmit={formik.handleSubmit}>
      <Title>Login form</Title>
      <InputsContainer>
        <Input
          id="email-id"
          name={LOGIN_FORM_VALUES.EMAIL}
          placeholder="Enter your email"
          label="Email"
          // formik.values.email - мы прописываем, чтобы элемент формы получил значение, которое пользователь вводит с клавиатуры
          value={formik.values[LOGIN_FORM_VALUES.EMAIL]}
          // formik.handleChange - помогает контролировать ввод данных пользователем с клавиатуры
          // и когда пользователь что-то вводит, то formik.handleChange записывает данные в formik.values.email
          onChange={formik.handleChange}
          error={formik.errors[LOGIN_FORM_VALUES.EMAIL]}
        />
        <Input
          id="password-id"
          name={LOGIN_FORM_VALUES.PASSWORD}
          type="password"
          placeholder="Enter your password"
          label="Password"
          value={formik.values[LOGIN_FORM_VALUES.PASSWORD]}
          onChange={formik.handleChange}
          error={formik.errors[LOGIN_FORM_VALUES.PASSWORD]}
        />
      </InputsContainer>
      <Button name="Login" type="submit" />
    </LoginFormContainer>
  );
}

export default LoginForm;

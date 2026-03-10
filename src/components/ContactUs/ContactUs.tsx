import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

import { LoginFormContainer, InputsContainer, Title } from "./styles";
import { LOGIN_FORM } from "./types"; 

const validationSchema = Yup.object().shape({
  [LOGIN_FORM.FullNAME]: Yup.string()
    .required("FULLNAME field is required")
    .min(3, "FULLNAME field should contain min 3 characters")
    .max(50, "FULLNAME field should contain max 50 characters"),
     [LOGIN_FORM.PHONE]: Yup.number()
  .required("PHONE field is required")
  .min(4, "PHONE field should contain min 4 characters")
  .max(20, "PHONE field should contain max 20 characters"),
   [LOGIN_FORM.EMAIL]:Yup.string()
  .required("EMAIL field is required")
   .min(6, "EMAIL field should contain min 6 characters")
  .max(60, "EMAIL field should contain max 60 characters"),
});

function LoginForm() {  
  const formik = useFormik({
    initialValues: {
      [LOGIN_FORM.EMAIL]: "",
      [LOGIN_FORM.FullNAME]: "",
      [LOGIN_FORM.PHONE]: "",
    },
    validationSchema: validationSchema,
    validateOnChange: false,
    onSubmit: (values, helpers) => {
      console.log("Formik submit event works!!!");
      console.log(values);
      console.log(helpers);
        helpers.resetForm();
    },
  });

  console.log(formik);

  return (    
    <LoginFormContainer onSubmit={formik.handleSubmit}>
      <Title>ContactUs</Title>
      <InputsContainer>
        <Input
          id="email-id"
          name={LOGIN_FORM.EMAIL}
          placeholder="Enter your email"
          label="Email"
            value={formik.values[LOGIN_FORM.EMAIL]}
               onChange={formik.handleChange}
          error={formik.errors[LOGIN_FORM.EMAIL]}
           />
        <Input
          id="fullName-id"
          name={LOGIN_FORM.FullNAME}
          type="password"
          placeholder="Enter your fullName"
          label="fullName"
            value={formik.values[LOGIN_FORM.FullNAME]}
               onChange={formik.handleChange}
          error={formik.errors[LOGIN_FORM.FullNAME]}
           />
        <Input
          id="password-id"
          name={LOGIN_FORM.PHONE}
          type="password"
          placeholder="Enter your phone"
          label="Phone"
             value={formik.values[LOGIN_FORM.PHONE]}
               onChange={formik.handleChange}
          error={formik.errors[LOGIN_FORM.PHONE]}
                />
      </InputsContainer>
      <Button name=" SEND REQUEST" type="submit" />

    </LoginFormContainer>
  );
}


export default LoginForm;
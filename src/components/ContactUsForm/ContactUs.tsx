import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

import { ContactUsFormContainer, Title, InputsContainer } from "./styles";
import { CONTACT_US_FORM_NAMES } from "./types";

function ContactUsForm() {
  const validationSchema = Yup.object().shape({
    [CONTACT_US_FORM_NAMES.FULL_NAME]: Yup.string()
      .required("Full name field is required")
      .min(3, "Minimum Full name field length should be 3")
      .max(50, "Maximum Full name field length should be 50"),
    [CONTACT_US_FORM_NAMES.PHONE]: Yup.string()
      .required("Phone field is required")
      .min(4, "Minimum Phone field length should be 4")
      .max(20, "Maximum Phone field length should be 20"),
    [CONTACT_US_FORM_NAMES.EMAIL]: Yup.string()
      .email("This field should be in email format")
      .min(6, "Minimum Email field length should be 6")
      .max(60, "Maximum Email field length should be 60"),
  });

  const formik = useFormik({
    // name у элементов формы должен совпадать с ключом обьекта initialValues
    initialValues: {
      [CONTACT_US_FORM_NAMES.FULL_NAME]: "",
      [CONTACT_US_FORM_NAMES.PHONE]: "",
      [CONTACT_US_FORM_NAMES.EMAIL]: "",
    },
    validationSchema: validationSchema,
    validateOnChange: false,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <ContactUsFormContainer onSubmit={formik.handleSubmit}>
      <Title>Contact us</Title>
      <InputsContainer>
        <Input
          id="contactus-fullname"
          label="Full name*"
          placeholder="Your full name"
          name={CONTACT_US_FORM_NAMES.FULL_NAME}
          onChange={formik.handleChange}
          value={formik.values[CONTACT_US_FORM_NAMES.FULL_NAME]}
          error={formik.errors[CONTACT_US_FORM_NAMES.FULL_NAME]}
        />
        <Input
          id="contactus-phone"
          label="Phone*"
          placeholder="Your phone number"
          name={CONTACT_US_FORM_NAMES.PHONE}
          onChange={formik.handleChange}
          value={formik.values[CONTACT_US_FORM_NAMES.PHONE]}
          error={formik.errors[CONTACT_US_FORM_NAMES.PHONE]}
        />
        <Input
          id="contactus-email"
          label="Email"
          placeholder="Your email"
          name={CONTACT_US_FORM_NAMES.EMAIL}
          onChange={formik.handleChange}
          value={formik.values[CONTACT_US_FORM_NAMES.EMAIL]}
          error={formik.errors[CONTACT_US_FORM_NAMES.EMAIL]}
        />
      </InputsContainer>
      <Button name="SEND REQUEST" type="submit" />
    </ContactUsFormContainer>
  );
}

export default ContactUsForm;

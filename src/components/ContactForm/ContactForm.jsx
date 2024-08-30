import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import css from "./ContactForm.module.css";

export default function ContactForm({ onAddContact }) {
  const id = useId();

  const FormSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, "Must be 3 letters or more!")
      .max(50, "Must be 50 letters or less!")
      .required("Required"),
    number: Yup.string()
      .matches(/^\d{3}-\d{2}-\d{2}$/, "Please enter a valid number.")
      .required("Required"),
  });

  const handleSubmit = (values, actions) => {
    onAddContact(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ username: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={FormSchema}
    >
      <Form className={css.form}>
        <label htmlFor={`${id}-name`}>Name</label>
        <div className={css.position}>
          <Field
            className={css.field}
            type="text"
            name="username"
            id={`${id}-name`}
          ></Field>

          <ErrorMessage
            name="username"
            component="span"
            className={css.errorMessage}
          />
        </div>
        <label htmlFor={`${id}-number`}>Number</label>
        <div className={css.position}>
          <Field
            className={css.field}
            type="text"
            name="number"
            id={`${id}-number`}
            placeholder="000-00-00"
          ></Field>
          <ErrorMessage
            name="number"
            component="span"
            className={css.errorMessage}
          />
        </div>
        <button className={css.formBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}

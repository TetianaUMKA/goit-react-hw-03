import { useId } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { ErrorMessage } from "formik";

export default function ContactForm({ onAddContact }) {
  const id = useId();

  const formSchema = Yup.object().shape({
    username: Yup.string("Must be a number")
      .min(3, "Must be 130 characters or more!")
      .max(50, "Must be 50 characters or less!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Must be 3 characters or more!")
      .max(50, "Must be 50 characters or less!")
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
      validationSchema={formSchema}
    >
      <Form>
        <label htmlFor={`${id}-name`}>Name</label>
        <Field type="text" name="username" id={`${id}-name`}></Field>
        <ErrorMessage name="username" component="span" />

        <label htmlFor={`${id}-number`}>Number</label>
        <Field type="text" name="number" id={`${id}-number`}></Field>
        <ErrorMessage name="number" component="span" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

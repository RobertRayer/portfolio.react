import React from "react";

import { useFormik } from "formik";
import * as Yup from "yup";

export default () => {
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const formik = useFormik({
    initialValues: {
      "bot-field": "",
      "form-name": "contact",
      name: "",
      email: "",
      comments: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email address is required"),
      comments: Yup.string().required("Body is required"),
    }),
    onSubmit: (values, actions) => {
      fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: encode({ "form-name": "contact", ...values }),
      })
        .then(() => {
          alert("Thanks for contacting me, I will be in touch shortly");
          actions.resetForm();
        })
        .catch(() => {
          alert("Error");
        })
        .finally(() => actions.setSubmitting(false));
    },
  });

  return (
    <div className="contact section" id="Contact">
      <div className="container">
        <form
          name="contact"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          method="post"
          onSubmit={formik.handleSubmit}
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <div>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              className="form-control"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-danger">{formik.errors.name}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              className="form-control"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-danger">{formik.errors.email}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor="comments">Body</label>
            <textarea
              id="comments"
              name="comments"
              type="text"
              rows="4"
              className="form-control"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.comments}
            />
            {formik.touched.comments && formik.errors.comments ? (
              <div className="text-danger">{formik.errors.comments}</div>
            ) : null}
          </div>
          <div>
            <button
              type="submit"
              className="btn btn-primary mt-2"
              disabled={formik.isSubmitting}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
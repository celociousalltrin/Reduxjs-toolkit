import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useState, useRef } from "react";

const Form = () => {
  // const Cont = [{id:1, name:"Celo"}, {id:2, name:"Aelo"}]
  const [data, setData] = useState([]);
  // console.log(data);
  const inputEl = useRef("");
  //  console.log(inputEl)
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (cont, { resetForm }) => {
      setData(cont);
      resetForm({ cont: "" });
      inputEl.current.focus();
    },
    validationSchema: yup.object({
      firstName: yup
        .string()
        .max(15, "Must be 15 chaaracters or less")
        .min(4, "Must be 4 Characters or less")
        .required("Required"),
      lastName: yup
        .string()
        .max(10, "Must be 10 characters or less")
        .required("Required"),
      email: yup.string().email("Invalid email addtress").required("Required"),
    }),
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <input
          ref={inputEl}
          id="firstName"
          name="firstName"
          type="text"
          placeholder="firstname..."
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <p>{formik.errors.firstName}</p>
        ) : null}

        <input
          id="lastName"
          name="lastName"
          type="text"
          placeholder="lastName..."
          value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <p>{formik.errors.lastName}</p>
        ) : null}

        <input
          id="email"
          name="email"
          type="email"
          placeholder="email..."
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email ? (
          <p>{formik.errors.email}</p>
        ) : null}
        <button type="submit">Submit</button>
      </form>

      {[data].map((item, index) => {
        return (
          <div key={index}>
            <h3>{item.email}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Form;

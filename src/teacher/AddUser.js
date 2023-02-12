import { Button, TextField } from '@mui/material'
import { useFormik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import * as yup from "yup";

const userValidationSchema = yup.object({
  id : yup
  .number()
  .required(),
  firstname : yup
  .string()
  .required(),
  lastname : yup
  .string()
  .required(),
  age : yup
  .number()
  .required(),
  gender : yup
  .string()
  .required(),
  email : yup
  .string()
  .required(),
  phone : yup
  .string()
  .required(),
});

function AddUser() {
  const formik = useFormik({
    initialValues:{
      id:"",
      firstname:"",
      lastname:"",
      age:"",
      gender:"",
      email:"",
      phone:"",
    },
    validationSchema:userValidationSchema,
    onSubmit:(newUser) => {
      createUser(newUser);
    },
  })
  const navigate = useNavigate()
  const createUser = (newUser) => {
    fetch(`https://63cf7c7f8a780ae6e677002e.mockapi.io/users`, {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then(() => navigate("/users"));
  };
  return (
    <div>
    <form onSubmit={formik.handleSubmit} className="add-user">
    <TextField
        id="id"
        name="id"
        label="ID"
        variant="outlined"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.id} />
    {formik.touched.id && formik.errors.id ? formik.errors.id : ""}

    <TextField
        id="firstname"
        name="firstname"
        label="FirstName"
        variant="outlined"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstname} />
     {formik.touched.firstname && formik.errors.firstname ? formik.errors.firstname : ""}

    <TextField
        id="lastname"
        name="lastname"
        label="LastName"
        variant="outlined"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastname} />
    {formik.touched.lastname && formik.errors.lastname ? formik.errors.lastname : ""}

    <TextField
        id="age"
        name="age"
        label="Age"
        variant="outlined"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.age} />
    {formik.touched.age && formik.errors.age ? formik.errors.age : ""}

    <TextField
        id="gender"
        name="gender"
        label="Gender"
        variant="outlined"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.gender} />
    {formik.touched.gender && formik.errors.gender ? formik.errors.gender : ""}

    <TextField
        id="email"
        name="email"
        label="Email"
        variant="outlined"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email} />
    {formik.touched.email && formik.errors.email ? formik.errors.email : ""}

    <TextField
        id="phone"
        name="phone"
        label="Phone"
        variant="outlined"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.phone} />
    {formik.touched.phone && formik.errors.phone ? formik.errors.phone : ""}

        <Button 
        variant="contained" 
        onClick={createUser}
        type="submit">
        Add Teacher
        </Button>

      </form>
    </div>
  )
}

export default AddUser
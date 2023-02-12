import { Button, TextField } from '@mui/material'
import { useFormik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import * as yup from "yup";

const userValidationSchema = yup.object({
  RollNo : yup
  .number()
  .required(),
  Class : yup
  .string()
  .required(),
  Section : yup
  .string()
  .required(),
  Name : yup
  .string()
  .required(),
  Marks : yup
  .number()
  .required(),
  Grade : yup
  .string()
  .required(),
});

function AddUser() {
  const formik = useFormik({
    initialValues:{
      RollNo:"",
      Class:"",
      Section:"",
      Name:"",
      Marks:"",
      Grade:"",
    },
    validationSchema:userValidationSchema,
    onSubmit:(newUser) => {
      createUser(newUser);
    },
  })
  const navigate = useNavigate()
  const createUser = (newUser) => {
    fetch(`https://63cf7c7f8a780ae6e677002e.mockapi.io/students`, {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then(() => navigate("/students"));
  };
  return (
    <div>
    <form onSubmit={formik.handleSubmit} className="add-user">
    <TextField
        id="RollNo"
        name="RollNo"
        label="Roll No"
        variant="outlined"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.RollNo} />
    {formik.touched.RollNo && formik.errors.RollNo ? formik.errors.RollNo : ""}

    <TextField
        id="Class"
        name="Class"
        label="Class"
        variant="outlined"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.Class} />
     {formik.touched.Class && formik.errors.Class ? formik.errors.Class : ""}

    <TextField
        id="Section"
        name="Section"
        label="Section"
        variant="outlined"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.Section} />
    {formik.touched.Section && formik.errors.Section ? formik.errors.Section : ""}

    <TextField
        id="Name"
        name="Name"
        label="Name"
        variant="outlined"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.Name} />
    {formik.touched.Name && formik.errors.Name ? formik.errors.Name : ""}

    <TextField
        id="Marks"
        name="Marks"
        label="Marks"
        variant="outlined"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.Marks} />
    {formik.touched.Marks && formik.errors.Marks ? formik.errors.Marks : ""}

    <TextField
        id="Grade"
        name="Grade"
        label="Grade"
        variant="outlined"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.Grade} />
    {formik.touched.Grade && formik.errors.Grade ? formik.errors.Grade : ""}

    
        <Button 
        variant="contained" 
        onClick={createUser}
        type="submit">
        Add User
        </Button>

      </form>
    </div>
  )
}

export default AddUser
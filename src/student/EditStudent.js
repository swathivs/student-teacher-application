import { Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function EditStudent() {
    const [editStudent, setEditStudent] = useState(null);
    const { id } =useParams();

    useEffect(() => {
        fetch(`https://63cf7c7f8a780ae6e677002e.mockapi.io/students/${id}`, {
          method: "GET",
        })
          .then((data) => data.json())
          .then((usr) => setEditStudent(usr));
      }, [id]);

    
      return editStudent ? <EditStudentForm editStudent={editStudent} /> : "Loading...";
}

function EditStudentForm({editStudent}){
    // const [id,setId] = useState(editStudent.id)
    const [rollNo,setRollNo] = useState(editStudent.RollNo)
    const [class1,setClass1] = useState(editStudent.Class)
    const [section,setSection] = useState(editStudent.Section)
    const [name,setName] = useState(editStudent.Name)
    const [marks,setMarks] = useState(editStudent.Marks)
    const [grade,setGrade] = useState(editStudent.Grade)
    const navigate = useNavigate();
    return(
        <div className='edit-student'>
        <TextField
        value={rollNo}
        id="outlined-basic"
        label="Roll No"
        variant="outlined"
        onChange={(event) => setRollNo(event.target.value)} />
        <br/><br/>

        <TextField
        value={class1}
        id="outlined-basic"
        label="Class"
        variant="outlined"
        onChange={(event) => setClass1(event.target.value)} />
        <br/><br/>

        <TextField
        value={section}
        id="outlined-basic"
        label="Section"
        variant="outlined"
        onChange={(event) => setSection(event.target.value)} />
        <br/><br/>

        <TextField
        value={name}
        id="outlined-basic"
        label="Name"
        variant="outlined"
        onChange={(event) => setName(event.target.value)} />
        <br/><br/>

        <TextField
        value={marks}
        id="outlined-basic"
        label="Marks"
        variant="outlined"
        onChange={(event) => setMarks(event.target.value)} />
        <br/><br/>

        <TextField
        value={grade}
        id="outlined-basic"
        label="Grade"
        variant="outlined"
        onChange={(event) => setGrade(event.target.value)} />
        <br/><br/>

        <Button 
    variant="contained"
    onClick={()=>{
        const UpdatedStudent = {
            RollNo:rollNo,
            Class:class1,
            Section:section,
            Name:name,
            Marks:marks,
            Grade:grade,
        };
        console.log(UpdatedStudent);
        fetch(`https://63cf7c7f8a780ae6e677002e.mockapi.io/students//${editStudent.id}`, {
            method: "PUT",
            body: JSON.stringify(UpdatedStudent),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((data) => data.json())
            .then(() => navigate("/students"));
    }}
    >
    Save 
    </Button>
        </div>
    )
}

export default EditStudent
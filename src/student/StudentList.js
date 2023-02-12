import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function StudentList() {
  const navigate = useNavigate();
    const studentData = ["Roll No","Class","Section","Name","Marks","Grade","Action"]
    const [student, setStudent]=useState([])
  const getUser = () => {
    fetch(`https://63cf7c7f8a780ae6e677002e.mockapi.io/students`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => setStudent(result));
  };
  useEffect(() => getUser(), []);
  return (
    <div>
    <div className='tableH'>
    <h1 className='details'>Student Details</h1>
    <div className='add-Stud'>
    <Button  
      variant="contained"
      onClick={()=>{
          navigate(`/students/addstudent`);
        }}
      >
      Add Student
      </Button>
    </div>
    </div>
     <TableContainer component={Paper}>
        <Table>
        <TableHead>
            <TableRow className='trow'>
              {studentData.map((element)=>{
                return <TableCell>{element}</TableCell>
              })} 
            </TableRow>
        </TableHead>
              <TableBody>
                {student.map((element)=>{
                  return (
                    <TableRow>
                      <TableCell>{element.RollNo}</TableCell>
                      <TableCell>{element.Class}</TableCell>
                      <TableCell>{element.Section}</TableCell>
                      <TableCell>{element.Name}</TableCell>
                      <TableCell>{element.Marks}</TableCell>
                      <TableCell>{element.Grade}</TableCell>
                      <TableCell>
                      
                        <Button
                        onClick={()=>{
                          navigate(`/students/edit/${element.id}`);
                        }}
                        >
                        <EditIcon/>
                        </Button>
                        <Button 
        onClick={() => {
          alert("Are you sure you want to delete");
          fetch(`https://63cf7c7f8a780ae6e677002e.mockapi.io/students/${element.id}`,{
            method: 'DELETE'
          }).then(()=>getUser());
        }}
        >
            <DeleteIcon color='error'/>
        </Button>      
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
        </Table>
        </TableContainer>
    </div>
  )
}

export default StudentList
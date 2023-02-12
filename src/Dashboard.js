import { AppBar, Button, Toolbar } from '@mui/material'
import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './Home';
import AddUser from './teacher/AddUser';
import AddStudent from './student/AddStudent';
import EditStudent from './student/EditStudent';
import StudentList from './student/StudentList'
import EditUser from './teacher/EditUser';
import TeacherList from './teacher/TeacherList'

function Dashboard() {
    const navigate = useNavigate();
  return (
    <div>
    
        <AppBar position='static'>
        <Toolbar>
        {/* <Button 
            color='inherit'
            onClick={()=> navigate("/")}>
                Home
            </Button> */}
            <Button 
            color='inherit'
            onClick={()=> navigate("/students")}>
                Student
            </Button>
            <Button 
            color='inherit'
            onClick={() => navigate("/users")}>
                Teacher
            </Button>
        </Toolbar>
        </AppBar>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/students' element={<StudentList />} />
            <Route path='/users' element={<TeacherList />} />
            <Route path='/students/edit/:id' element={<EditStudent />} />
            <Route path='/students/addstudent' element={<AddStudent />} />
            <Route path='/users/edit/:id' element={<EditUser />} />
            <Route path="/users/adduser" element={<AddUser/>} />
        </Routes>
    </div>
  )
}

export default Dashboard
import React, { useEffect, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";

function TeacherList() {
  const navigate = useNavigate();
  const headData=["Id","First Name","Last Name","Age","Gender","Email","Phone","Action"];
  const [user, setUser]=useState([])
  const getUser = () => {
    fetch(`https://63cf7c7f8a780ae6e677002e.mockapi.io/users`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => setUser(result));
  };
  useEffect(() => getUser(), []);
 return (
    <div className='container'>
    
    <h1 className='top'>Teachers</h1>  
    <div className='topbtn'>
    <Button  
      variant="contained"
      onClick={()=>{
          navigate("/users/adduser");
        }}
      >
      Add Teacher
      </Button>
    </div>
      <div className='tab'>
    <table className='teachTable'>
    <thead>
      {headData.map((element, index)=>{
        return <th className='teachTable' key={index}>{element}</th> 
      })}
    </thead>
    <tbody >
    {user.map((element,index)=>{
           return ( 
        <tr className='teachTable' key={index}
        id={element.id} >
        <td className='teachTable'>{element.id}</td>
        <td className='teachTable'>{element.firstname}</td>
        <td className='teachTable'>{element.lastname}</td>
        <td className='teachTable'>{element.age}</td>
        <td className='teachTable'>{element.gender}</td>
        <td className='teachTable'>{element.email}</td>
        <td className='teachTable'>{element.phone}</td>
        <td className='teachTable'><Button
        onClick={() => {
          navigate(`/users/edit/${element.id}`);
        }}
        >
          <EditIcon/>
        </Button>
        <Button 
        onClick={() => {
          alert("Are you sure you want to delete");
          fetch(`https://63cf7c7f8a780ae6e677002e.mockapi.io/users/${element.id}`,{
            method: 'DELETE'
          }).then(()=>getUser());
        }}
        >
            <DeleteIcon color='error'/>
        </Button></td>
      </tr>
    
      );
    })}
    </tbody>
    </table>
    </div>
    </div>
  )
}
export default TeacherList
import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function EditUser() {
    const [editUser, setEditUser] = useState(null);
    const { id } =useParams();

    useEffect(() => {
        fetch(`https://63cf7c7f8a780ae6e677002e.mockapi.io/users/${id}`, {
          method: "GET",
        })
          .then((data) => data.json())
          .then((usr) => setEditUser(usr));
      }, [id]);

    
      return editUser ? <EditUserForm editUser={editUser} /> : "Loading...";
}
function EditUserForm({editUser}){
    const [id,setId] = useState(editUser.id)
    const [firstname,setFirstname] = useState(editUser.firstname)
    const [lastname,setLastname] = useState(editUser.lastname)
    const [age,setAge] = useState(editUser.age)
    const [gender,setGender] = useState(editUser.gender)
    const [email,setEmail] = useState(editUser.email)
    const [phone,setPhone] = useState(editUser.phone)
    const navigate = useNavigate();
    return(
        
    <div className='edit-user'>
    <TextField
    value={id}
    id="outlined-basic"
    label="ID"
    variant="outlined"
    onChange={(event) => setId(event.target.value)} />
    <br/><br/>
    <TextField
    value={firstname}
    id="outlined-basic"
    label="First Name"
    variant="outlined"
    onChange={(event) => setFirstname(event.target.value)} />
    <br/><br/>
    <TextField
    value={lastname}
    id="outlined-basic"
    label="Last Name"
    variant="outlined"
    onChange={(event) => setLastname(event.target.value)} />
    <br/><br/>
    <TextField
    value={age}
    id="outlined-basic"
    label="Age"
    variant="outlined"
    onChange={(event) => setAge(event.target.value)} />
    <br/><br/>
    <TextField
    value={gender}
    id="outlined-basic"
    label="Gender"
    variant="outlined"
    onChange={(event) => setGender(event.target.value)} />
    <br/><br/>
    <TextField
    value={email}
    id="outlined-basic"
    label="Email"
    variant="outlined"
    onChange={(event) => setEmail(event.target.value)} />
    <br/><br/>
    <TextField
    value={phone}
    id="outlined-basic"
    label="Phone"
    variant="outlined"
    onChange={(event) => setPhone(event.target.value)} />
    <br/><br/>
    <Button 
    variant="contained"
    onClick={()=>{
        const UpdatedUser = {
            id:id,
            firstname:firstname,
            lastname:lastname,
            age:age,
            gender:gender,
            email:email,
            phone:phone,
        };
        // console.log(UpdatedUser);
        fetch(`https://63cf7c7f8a780ae6e677002e.mockapi.io/users//${editUser.id}`, {
            method: "PUT",
            body: JSON.stringify(UpdatedUser),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((data) => data.json())
            .then(() => navigate("/users"));
    }}
    >
    Save 
    </Button>
    </div>
        
    );
}

export default EditUser
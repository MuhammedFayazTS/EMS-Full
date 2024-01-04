import React, { useState } from 'react'
import { MDBBtn, MDBInput } from 'mdb-react-ui-kit';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function Add() {
  const [id,setId] = useState('')
  const [name,setName] = useState('')
  const [age,setAge] = useState('')
  const [designation,setDesignation] = useState('')
  const [salary,setSalary] = useState('')
  const location = useNavigate();
  
  const handleAdd = async() =>{
    const body={
      id,
      name,
      age,
      designation,
      salary
    }
    // api call to add employee details
    const response = await axios.post('http://localhost:8000/addEmployees',body).then((response)=>{
      console.log(response);
      // alert('Employee added successfully');
      toast.success('Employee added successfully');
      location('/') //redirect to adminpage
    }).catch((error)=>{
      // alert("enter unique employee id ");
      toast.warning("enter unique employee id ");
    })
  }

  return (
    <>
        <div className="container">
            <h3 className='text-center text-dark m-3'>Add Employee Details
            <i className='fa-solid fa-user-plus ms-2'></i>
            </h3>  
            <div className="form w-50 container">
            <MDBInput label='Id' onChange={(e)=>setId(e.target.value)} id='formControlLg' size='lg'  type='text' />
            <br />
            <MDBInput label='Name' onChange={(e)=>setName(e.target.value)} id='formControlLg' size='lg' type='text' />
            <br />
            <MDBInput label='Age' onChange={(e)=>setAge(e.target.value)} id='formControlLg' size='lg' type='text' />
            <br />
            <MDBInput label='Designation' onChange={(e)=>setDesignation(e.target.value)} id='formControlLg' size='lg' type='text' />
            <br />
            <MDBInput label='Salary' onChange={(e)=>setSalary(e.target.value)} id='formControlLg' size='lg' type='text' />

            <div className='text-center m-3'>
              <MDBBtn onClick={(e)=>handleAdd(e)} color='primary'>Add </MDBBtn>
              </div>
            </div>
        <ToastContainer />
        </div> 
    </>
  )
}

export default Add
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MDBBtn, MDBInput } from 'mdb-react-ui-kit';

function Edit() {

  const [empId,setEmpId] = useState('')
  const [empName,setEmpName] = useState('')
  const [empAge,setEmpAge] = useState('')
  const [empDesignation,setEmpDesignation] = useState('')
  const [empSalary,setEmpSalary] = useState('')

  const Navigate = useNavigate()

  const {id} = useParams();
  console.log(id);
  const fetchData = async(id) =>{
    const {data} = await axios.get(`http://localhost:8000/viewEmployee/${id}`)
    setEmpId(data.employee.id);
    setEmpName(data.employee.name);
    setEmpAge(data.employee.age);
    setEmpDesignation(data.employee.designation);
    setEmpSalary(data.employee.salary);
  }


  const handleUpdate = async(e) => {
    const body={
      id:empId,
      name:empName,
      age:empAge,
      designation:empDesignation,
      salary:empSalary
    }
    // console.log(body);
    const {data} = await axios.post('http://localhost:8000/updateEmployee/'+id,body)
    toast.success(data.message)
    Navigate('/')
    console.log(data.message);
  }

  useEffect(()=>{
    fetchData(id);
  },[])


  return (
    <>
    
        <div className="container">
            <h3 className='text-center text-dark m-3'>Update Employee Details
            <i className='fa-solid fa-user ms-2'></i>
            </h3>  
            <div className="form w-50 container">
            <MDBInput disabled label='Id' value={empId} onChange={(e)=>setEmpId(e.target.value)} id='formControlLg' size='lg'  type='text' />
            <br />
            <MDBInput label='Name' value={empName} onChange={(e)=>setEmpName(e.target.value)} id='formControlLg' size='lg' type='text' />
            <br />
            <MDBInput label='Age' value={empAge} onChange={(e)=>setEmpAge(e.target.value)} id='formControlLg' size='lg' type='text' />
            <br />
            <MDBInput label='Designation' value={empDesignation} onChange={(e)=>setEmpDesignation(e.target.value)} id='formControlLg' size='lg' type='text' />
            <br />
            <MDBInput label='Salary'value={empSalary} onChange={(e)=>setEmpSalary(e.target.value)} id='formControlLg' size='lg' type='text' />

            <div className='text-center m-3'>
              <MDBBtn onClick={(e)=>handleUpdate(e)} color='primary'>Update</MDBBtn>
              </div>
            </div>
        <ToastContainer />
        </div> 
    </>
  )
}

export default Edit
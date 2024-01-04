import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  MDBCard,
  MDBCardHeader,
  MDBListGroup,
  MDBListGroupItem,
  MDBCardImage,
  MDBCardBody,
  MDBBtn
} from 'mdb-react-ui-kit';

function View() {
  const [employeeData,setEmployeeData] = useState({});
  const {id} =  useParams();
  console.log(id);
  const fetchData = async() =>{
    const {data} = await axios.get(`http://localhost:8000/viewEmployee/${id}`)
    setEmployeeData(data.employee);

  }

  const Navigate = useNavigate()

  useEffect(()=>{
    fetchData(id);
  },[])

  return (
    <>
       <div className='container p-5 my-4'>
            {
              <MDBCard className='mx-5'>
                {/* <div className='d-flex justify-content-center '><img src="https://mdbootstrap.com/img/new/standard/nature/182.webp" height={180} width={'100%'} className='object-fit-cover' alt="" /></div> */}
                {/* <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/182.webp' height={130} className='w-25'  alt='...' position='top' /> */}
                <MDBCardBody>
              <MDBCardHeader className='text-center h3'>{employeeData.name}</MDBCardHeader>
              <MDBListGroup className='text-center ' flush>
                <MDBListGroupItem>{employeeData.id}</MDBListGroupItem>
                <MDBListGroupItem>{employeeData.age}</MDBListGroupItem>
                <MDBListGroupItem>{employeeData.designation}</MDBListGroupItem>
                <MDBListGroupItem>{employeeData.salary}</MDBListGroupItem>
              </MDBListGroup>
              <div className='text-center my-3'>
                <MDBBtn color='primary' onClick={()=>Navigate('/')}>
              <i class="fa-solid fa-arrow-left"></i>
                </MDBBtn></div>
              </MDBCardBody>  
            </MDBCard>
            }
       </div>
    </>
  )
}

export default View
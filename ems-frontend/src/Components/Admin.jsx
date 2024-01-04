import React, { useEffect, useState } from 'react'
import { MDBBtn } from 'mdb-react-ui-kit'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

function Admin() {
    const [employees,setEmployees] = useState([])
    const Navigate = useNavigate();
    const fetchData =async()=>{
        const {data}= await axios.get('http://localhost:8000/getEmployees')
        console.log(data);
        setEmployees(data.employee)
    }

    const handleDelete=async(id)=>{
        await axios.delete(`http://localhost:8000/deleteEmployees/${id}`)
        fetchData();
        toast.error(`Employee deleted successfully`)
    }

    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div>
        <div className="container py-4">
            <h3 className="text-center">Employee Mangement System</h3>
            <p style={{textAlign:'justify'}}>
            An employee management system is technology designed to streamline core HR services and improve workforce productivity. It accomplishes these goals largely by automating labor-intensive, administrative tasks and using analytics to drive business decisions. Depending on the vendor, the HR product suite may include talent acquisition, payroll, timekeeping, benefits administration and more.
                Employee management is the process by which employers ensure workers perform their jobs to the best of their abilities so as to achieve business goals. It typically entails building and maintaining healthy relationships with employees, as well as monitoring their daily labor and measuring progress. In this way, employers can identify opportunities for improvement and recognize achievements.
            </p>
            <div className='text-end'> 
            {/* button container */}
                <MDBBtn color='primary' onClick={()=>Navigate('/add')}><i className='fa-solid fa-user-plus me-1'></i> Add</MDBBtn>
            </div>
            
              <div className="table  my-5">
                  <MDBTable responsive hover border={3}>
                      <MDBTableHead className='table-dark'>
                          <tr>
                              <th scope='col'>id</th>
                              <th scope='col'>Name</th>
                              <th scope='col'>Age</th>
                              <th scope='col'>Designation</th>
                              <th scope='col'>Salary</th>
                              <th scope='col'>Action</th>
                          </tr>
                      </MDBTableHead>
                      <MDBTableBody>
                        {employees.map(employee =>(
                            <tr>
                              <th className='border border-1' scope='row'>{employee.id}</th>
                              <td className='border border-1'>{employee.name}</td>
                              <td className='border border-1'>{employee.age}</td>
                              <td className='border border-1'>{employee.designation}</td>
                              <td className='border border-1 text-success'>{employee.salary}</td>
                              <td className='border border-1'>
                                    <div className='d-flex gap-2'>
                                        <MDBBtn size='sm' color='info'  onClick={()=>Navigate(`/edit/${employee.id}`)}> <i className='fa-solid  fa-edit'></i> </MDBBtn>
                                        <MDBBtn size='sm' color='warning' onClick={()=>Navigate(`/view/${employee.id}`)} > <i className='fa-solid  fa-eye'></i> </MDBBtn>
                                        <MDBBtn size='sm' color='danger' onClick={()=>handleDelete(employee.id)} > <i className='fa-solid  fa-trash'></i> </MDBBtn>
                                    </div>
                              </td>
                          </tr>
                              ))}
                      </MDBTableBody>
                  </MDBTable>
              </div>
        </div>
    </div>
  )
}

export default Admin
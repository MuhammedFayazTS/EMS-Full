import { MDBBtn } from 'mdb-react-ui-kit'
import React from 'react'

function PageNotFound() {
  return (
    <>
        <div className='d-flex justify-content-center align-items-center position-relative' style={{width:'100%',height:'75vh',background:'rgb(247, 249, 251)'}}>
            <img height={'100%'} width={'100%'} style={{objectFit:'contain'}}  src="https://cdn.dribbble.com/users/718859/screenshots/3267029/media/288dca6a18950d67040138304ba3837d.gif" alt="" />
            <MDBBtn href='/' color='info' className='position-absolute bottom-0 mb-3'>Go Home</MDBBtn>
        </div>
    </>
  )
}

export default PageNotFound
import React from 'react'
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
    MDBBtn
  } from 'mdb-react-ui-kit';

function Footer() {
  return (
    <>
        <MDBFooter className='text-center text-white' style={{ backgroundColor: '#f1f1f1' }}>
      <MDBContainer className='pt-4'>
        <section className='mb-4 d-flex justify-content-center'>
          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1 d-flex justify-content-center align-items-center text-decoration-none'
            href='#!'
            role='button'
          >
            <MDBIcon fab className=' fab fa-xl fa-facebook-f' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1 d-flex justify-content-center align-items-center text-decoration-none'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-xl fa-x-twitter' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1 d-flex justify-content-center align-items-center text-decoration-none'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-xl fa-google' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1 d-flex justify-content-center align-items-center text-decoration-none'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-xl fa-instagram' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1 d-flex justify-content-center align-items-center text-decoration-none'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-xl fa-linkedin' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1 d-flex justify-content-center align-items-center text-decoration-none'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-xl fa-github' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center text-dark p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright:
        <a className='text-dark' style={{textDecoration:'none'}} href='/'>
          EmployeeMangementSystem.com
        </a>
      </div>
    </MDBFooter>
    </>
  )
}

export default Footer
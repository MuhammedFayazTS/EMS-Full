import React, { useState } from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse
  } from 'mdb-react-ui-kit';
  

function Header() {
    const [showNav, setShowNav] = useState(false);
  return (
    <div>
        <MDBNavbar expand='lg' className='py-3' light bgColor='light'>
      <MDBContainer fluid>
      <MDBNavbarBrand href='/' >
            <img
              src='https://i.postimg.cc/T2yxkSr1/employee.png'
              height='25'
              alt=''
              loading='lazy'
              className='mx-3'
            />
            Employee Mangement System
          </MDBNavbarBrand>
        {/* <MDBNavbarToggler
          type='button'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNav(!showNav)}
        >
          <i class="fa-solid fa-bars"></i>
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNav}>
          <MDBNavbarNav>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='/'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#'>Features</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#'>Pricing</MDBNavbarLink>
            </MDBNavbarItem>
            
          </MDBNavbarNav>
        </MDBCollapse> */}
      </MDBContainer>
    </MDBNavbar>
          {/* <i className='fa-solid fa-briefcase fa-sm mx-1'></i>   */}
    </div>
  )
}

export default Header
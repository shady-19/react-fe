import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

const Header = () => {
    return (

        <>
              <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="">Doctors Microservice</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
             <Nav.Link href="/doctors">Doctors</Nav.Link>
              <Nav.Link href="/appointment">Book Appointment</Nav.Link>
              <Nav.Link href="/check">Check Appointment</Nav.Link> 
              
            </Nav>
          </Container>
        </Navbar>
        </>
    )
}

export default Header
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Header from './Header'
import Footer from './Footer'
import  Axios  from 'axios';

const Appointbook = () => {
  
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [address, setAddress] = useState("");
    const [query, setQuery] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [did, setDid] = useState("");
    

   

  

    const addAppointment = () => {
        Axios.post("http://localhost:5001/appointments/", {
            
       name:name,
       age:age,
       email: email,
       mobile : mobile,
       address : address,
       query : query,
       date:date,
       time:time,
       doctorDoctorId:did






       }).then(
        () => {
            console.log("success");
        }
       );

    };



  return (
    <div>
        <Header/>
       <div className='container mt-3'>
            <section className='d-flex justify-content-between'>
                <div className='l_deta mt-3 p-3' style={{ width: "100%" }}>
                    <h3 className='text-center col-lg-6'>Book Here </h3>
                    <Form>
                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                            <Form.Control type="Name"  onChange={(event) => { setName(event.target.value); }} placeholder="Enter Name" />

                        </Form.Group>

                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                            <Form.Control type="number"  onChange={(event) => { setAge(event.target.value); }} placeholder="Enter Age" />

                        </Form.Group> 

                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                            <Form.Control type="email"  onChange={(event) => { setEmail(event.target.value); }} placeholder="Enter your email" />

                        </Form.Group>

                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
        
        <Form.Control type="tel"  onChange={(event) => { setMobile(event.target.value); }} placeholder="Enter Mobile" />
        
                        </Form.Group>

                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Control type="text"  onChange={(event) => { setAddress(event.target.value); }} placeholder="Enter Address" />
                        </Form.Group>

                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

<Form.Control type="text"  onChange={(event) => { setQuery(event.target.value); }} placeholder="Enter Problem" />

                        </Form.Group>

                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

<Form.Control type="Date"  onChange={(event) => { setDate(event.target.value); }} placeholder="Enter Date of Appointment" />

                        </Form.Group>

                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
<Form.Control type="Time"  onChange={(event) => { setTime(event.target.value); }} placeholder="Enter Time" />
                        </Form.Group>

                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                        <Form.Control type="number"  onChange={(event) => { setDid(event.target.value); }} placeholder="Enter DoctorId" />
                        </Form.Group>

                        <Button onClick={addAppointment} className='col-lg-6' variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    
                </div>
                <div className='r_deta'>
                    <div className='sign_img'>
                        <img src="./19836.jpg" style={{ maxWidth: 580 }} alt='cant' />
                    </div>
                </div>
            </section>
        </div>
        <Footer />
    </div>
  )
}

export default Appointbook

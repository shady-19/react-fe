
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Axios from 'axios'
import Header from './Header';
import { useNavigate } from "react-router-dom";
import Footer from './Footer';
const Home = () => {

     const navigate = useNavigate();

    const [name, setName] = useState("");
    const [specialization, setSpecialization] = useState("");
    const [experince, setExperience] = useState("0");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const addDoctor = () => {
        Axios.post("http://localhost:5001/doctors", {
            doctorName: name,
            doctorSpecialization: specialization,
            doctorExperience: experince ,
            doctorEmail: email,
            doctorPassword: password

       }).then(
        () => {
            
        }
       );
       navigate("/Doctors");
    };
     
   


return (

    <div>
        <Header />
        <div className='container mt-3'>
            <section className='d-flex justify-content-between'>
                <div className='l_deta mt-3 p-3' style={{ width: "100%" }}>
                    <h3 className='text-center col-lg-6'>Sign Up</h3>
                    <Form>
                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                            <Form.Control type="Name" onChange={(event) => { setName(event.target.value); }} placeholder="Enter Name" />

                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                            <Form.Control type="Text" onChange={(event) => { setSpecialization(event.target.value); }} placeholder="Enter Specialization" />

                        </Form.Group> <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                            <Form.Control type="number" onChange={(event) => { setExperience(event.target.value); }} placeholder="Enter Experince in years" />

                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                            <Form.Control type="email" onChange={(event) => { setEmail(event.target.value); }} placeholder="Enter email" />

                        </Form.Group>

                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                            <Form.Control type="password" onChange={(event) => { setPassword(event.target.value); }} placeholder="Password" />
                        </Form.Group>

                        <Button onClick={addDoctor} className='col-lg-6' variant="primary" type="submit">
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
        <br></br>
        <br></br> <br></br>
        <Footer />
    </div>

)

}

export default Home

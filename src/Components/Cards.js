import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";


import ListGroup from 'react-bootstrap/ListGroup';
import axios from 'axios';
const Cards = () => {
    const navigate = useNavigate();
    const [list, setList] = useState([])

   useEffect(() => {

    axios.get("http://localhost:5001/doctors").then((response) =>{
        setList(response.data)
        console.log(response.data)
        

    } )
 },[]
   )
     
  return (
    <div>
     {
        list.map((value,key) => { 
          
        return(  
     <Card className="text-center">
      <Card.Header><b> {value.doctorName} </b> </Card.Header>
      <Card.Body>
        <Card.Title>{ value.doctorSpecialization } ({value.doctorId})</Card.Title>
        <Card.Text>
          I Have an experince of <b> {value.doctorExperience} </b>  years in this field. Please reach out to me on 
          &nbsp; <b>  { value.doctorEmail } </b>. 
        </Card.Text>
        <Button onClick={  () => {
             navigate("/appointment");
        }} variant="primary">Book Appointment</Button>

      </Card.Body>
      
      <Card.Footer className="text-muted">Thankyou!!!! Have a nice day.</Card.Footer>
      
    </Card>
      
       
        )

        })
     } 
     
     
    




    </div>
  )
}

export default Cards

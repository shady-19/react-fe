import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";


import ListGroup from 'react-bootstrap/ListGroup';
import axios from 'axios';

const Pcards = () => {

  const Accept = () => {
    alert("Your appointment have been Acceptted!!!")
  }

  const Reject = () => {
    alert("Your appointment have been Rejected. Try Again on another Date. Sorry for Inconvience!!!! ")
  }



  const [list, setList] = useState([])

  useEffect(() => {

    axios.get("http://localhost:5001/appointments/").then((response) => {
      setList(response.data)
      console.log(response.data)


    })
  }, []
  )


  return (
    <div>

      {
        list.map((value, key) => {

          return (


            <Card border="danger"   className="text-center">

              <Card.Body >
                <Card.Text>
                  <b> {value.name} </b> of age <b> {value.age}</b> wants an appointment on <b> {value.date}</b> at <b>{value.time}</b>
                  . He has <b>{value.query}</b> problem.
                </Card.Text>
                <Button onClick={Accept} variant="success">Accept</Button>
              </Card.Body>
              <Card.Footer className="text-muted"><Button onClick={Reject} variant="danger">Reject</Button></Card.Footer>
              <Card.Footer className="text-muted"><br></br></Card.Footer>

            </Card>

         


          )

        })
      }


    </div>
    
  )
}

export default Pcards

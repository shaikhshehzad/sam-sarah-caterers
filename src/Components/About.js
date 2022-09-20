import React, { Component } from 'react'
import Accordion from 'react-bootstrap/Accordion';
export default class About extends Component {
  render() {
    return (
      <div>
  {/* <div>
      Sam-Sarah Caterers Coming Live soon.........</div>
      <div>
     Reach out to us on below contacts</div>
    <div>
    email:- samsarahcaterers@gmail.com</div>
     <div>
    Contact Information :-  +91 9822447649
    </div> */}
    <Accordion >
      <Accordion.Item eventKey="0">
        <Accordion.Header>Email:-</Accordion.Header>
        <Accordion.Body>
        samsarahcaterers@gmail.com
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Contact Information :-</Accordion.Header>
        <Accordion.Body>
        +91 9822447649
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Address:-</Accordion.Header>
        <Accordion.Body>
         15 Blocks , Container Road , Bhusawal , District Jalgoan , State Maharashtra .
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>


      </div>
    )
  }
}

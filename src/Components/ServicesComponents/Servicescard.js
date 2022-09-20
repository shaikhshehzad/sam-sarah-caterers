import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import first from '..../assests/images/1.jpg';
// import second from '.../assests/images/2.jpg';
// import third from '.../assests/images/3.jpg';
export default class Servicescard extends Component {
  render() {
    return (
      <div> 
         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://source.unsplash.com/1000x500/?wedding" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>



      </div>
    )
  }
}

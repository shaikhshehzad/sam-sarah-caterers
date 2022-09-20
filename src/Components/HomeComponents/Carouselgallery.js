import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel';
export default class Carouselgallery extends Component {
  render() {
    return (
      <div>
         <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://source.unsplash.com/1000x500/?nachos"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Nachos</h3>
          <p>"Life is a nacho. It can be yummy-crunchy or squishy-yucky. It just depends on how long it takes for you to start eating it."</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://source.unsplash.com/1000x500/?burger"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Burger</h3>
          <p>yeah, i lift…this burger to my mouth</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://source.unsplash.com/1000x500/?pizza"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Pizza</h3>
          <p>
          “My love is pizza shaped. Won’t you have a slice? It’s circular, so there’s enough to go around.”
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>



      </div>
    )
  }
}

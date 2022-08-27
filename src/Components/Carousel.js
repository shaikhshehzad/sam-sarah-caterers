import React, { Component } from 'react'
import first from '../assests/images/1.jpg';
import second from '../assests/images/2.jpg';
import third from '../assests/images/3.jpg';
import './Carousel.css';

export default class carousel extends Component {
  render() {
    return (<>
      <div className="parent-container" >

      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={first}className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={second} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={third} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

    
</div>
      </>
    )
  }
}

import React, { Component } from 'react'
import video from '../assests/videos/video.mp4';

export default class Videoplayer extends Component {
  render() {
    return (
      <div>
       <video width="750" height="500" controls >
      <source src={video} type="video/mp4"/>
     </video>


      </div>
       

      
    )
  }
}

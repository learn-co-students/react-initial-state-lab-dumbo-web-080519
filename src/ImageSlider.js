// your ImageSlider code here!
import React, { Component } from 'react';

class ImageSlider extends Component {

 state = {
   currentSlideIndex: 0
 }
  render() {
    // console.log("State in Image Slider", this.state)
    const index = this.state.currentSlideIndex
    return (

      <div>
        I am on slide {index}
      </div>
    );
  }

}

export default ImageSlider;

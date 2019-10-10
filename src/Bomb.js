// your Bomb code here!
import React, { Component } from 'react';

class Bomb extends Component {

 state= {
   secondsLeft:this.props.initialCount
 }
  render() {
    const seconds = this.state.secondsLeft
    // console.log(this.state.secondsLeft)
    return (
      seconds !== 0 ?
      <div>{seconds} seconds left before I go boom!</div>
      :
      <div>Boom!</div>
    );
  }

}

export default Bomb;

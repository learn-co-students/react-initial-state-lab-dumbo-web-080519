// your Bomb code here!
import React from "react";

class Bomb extends React.Component {

  constructor(props) {
    super()
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render() {
    if (this.state.secondsLeft === 0) {
      return (<h4>Boom!</h4>)
    }
    return (
      <h4>{this.state.secondsLeft} seconds left before I go boom!</h4>)
  }


}

export default Bomb

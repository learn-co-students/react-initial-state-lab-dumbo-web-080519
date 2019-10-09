// your Bomb code here!
import React, { Component } from 'react';
export default class Bomb extends Component {
    
    state = {
        secondsLeft: this.props.initialCount
    }

    render(){
        return (<div>
            {this.props.initialCount === 0 ? 'Boom!' : `${this.props.initialCount} seconds left before I go boom!`}
        </div>)
        }
}
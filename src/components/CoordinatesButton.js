import React, {Component} from 'react';

export default class CoodinatesButton extends Component {
  createArray = event => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render() {
    return (
      <button onClick={this.createArray}>Click</button>
    )
  }
}
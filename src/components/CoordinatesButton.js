import React, { Component } from 'react';


export default class CoordinatesButton extends Component {

  
    clickHandler = (event) => {
        // event.persist()
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }
   
  
    render() {
      return <button onClick={this.clickHandler}>Coordinate Button</button>
    }
}

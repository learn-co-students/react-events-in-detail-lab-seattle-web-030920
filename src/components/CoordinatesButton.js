// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {
    // don't understand this syntax
    getCoords = (e) => {
        this.props.onReceiveCoordinates([e.clientX, e.clientY])
    }
    render () {
        return (
            <button onClick={this.getCoords}>click</button>
        )
    }
}

export default CoordinatesButton
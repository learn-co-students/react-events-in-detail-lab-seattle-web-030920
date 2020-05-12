import React, {Component} from 'react';

export default class CoordinatesButton extends Component {

    handleClick = (event) => {
        let coords = [event.clientX, event.clientY]
        // this.props.onReceiveCoordinates([clickEvent.clientX, clickEvent.cientY])
        this.props.onReceiveCoordinates(coords)
    }

    render() {
        return(
            <button onClick={this.handleClick} />
        )
    }
}
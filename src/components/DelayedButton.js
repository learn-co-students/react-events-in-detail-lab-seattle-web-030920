import React, {Component} from 'react';

export default class DelatedButton extends Component {

    handleClick = (event) => {
        event.persist()
        window.setTimeout(() => {
            this.props.onDelayedClick(event)
        }, this.props.delay);
    }

    render() {
        return(
            <button onClick={this.handleClick} />
        )
    }
}
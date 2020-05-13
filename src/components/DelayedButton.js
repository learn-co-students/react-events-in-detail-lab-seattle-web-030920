// Code DelayedButton Component Here
import React, {Component} from 'react'

export default class DelayedButton extends Component {

    handleDelay = (e) => {
        e.persist()
        window.setTimeout(() => {this.props.onDelayedClick(e)}, this.props.delay)
    }

    render(){
        return (
            <div>
            <button onClick={this.handleDelay} > Delayed Action Button</button>
            </div>
        )
    }
}
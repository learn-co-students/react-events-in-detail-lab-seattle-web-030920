// Code DelayedButton Component Here
import React from 'react';

class DelayedButton extends React.Component {
    // i hate this
    // why doesn't this work?
    dc = (e) => {
        e.persist()
        window.setTimeout(() => {this.props.onDelayedClick(e)}, this.props.delay)
    }

    render () {
        return (
            <button onClick={this.dc}>react is garbage!</button>
        )
    }
}

export default DelayedButton
import React from 'react'

export default class DelayedButton extends React.Component
{
    handleClick = event => {
        event.persist()
        window.setTimeout(() => //{console.log(event)},
            this.props.onDelayedClick(event),
             this.props.delay)
    }

    render()
    {
        return (<button onClick={this.handleClick}>Delay</button>)
    }
}
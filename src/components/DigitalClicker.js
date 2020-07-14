// Code DigitalClicker Component Here
import React, { Component } from 'react';

export default class DigitalClicker extends Component {
  constructor() {
    super()
    this.state = {
      timesClicked: 0
    }
  }

  handleClick = () => {
    this.setState(prevState => ({timesClicked: prevState.timesClicked + 1}))
  }

  // https://stackoverflow.com/questions/42364838/incrementing-state-value-by-one-using-react

  render() {
    return (
      <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    )
  }
}

// The component renders out a button with a label that shows the timesClicked value. This means that, at the start, your button should just say 0.

// Code DigitalClicker Component Here
import React from 'react'

class DigitalClicker extends React.Component{
  state={
    timesClicked: 0
  }

  handleClick =()=>{
    this.setState(preState => {
      return {
        timesClicked: preState.timesClicked+1}
    })

  }

  render(){
    return(
      <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    )
  }
}

export default DigitalClicker
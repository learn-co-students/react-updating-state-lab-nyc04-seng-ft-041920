// Code DigitalClicker Component Here
import React, { Component } from 'react';

export default class DigitalClicker extends Component {
    state = {
        timesClicked: 0
    }

    handleClicks = () => {
        this.setState(prevState => {
            return {
                timesClicked: prevState.timesClicked + 1
            }
        })
    }

    render(){
        return(
            <button onClick={this.handleClicks}>{this.state.timesClicked}</button>
        )
    }
}
// Code DigitalClicker Component Here
import React, {Component} from 'react';

export default class DigitalClicker extends Component {
    
    constructor() {
        super()
        this.state = {
            timesClicked: 0
        }
    }
    
    renderClick = () => {
        let addClick = this.state.timesClicked + 1;
        this.setState({
            timesClicked: addClick
        })
    }
    render() {
        return(
            <button onClick={this.renderClick}>{this.state.timesClicked}</button>
        )
    }
}
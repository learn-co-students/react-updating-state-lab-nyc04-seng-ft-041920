// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

export default class YouTubeDebugger extends Component {
  constructor() {
    super()
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

// Create a button with the class 'bitrate'. Clicking this button changes the settings.bitrate state property to 12.

  // this.setState({
  //   addressInfo: {
  //     ...this.state.addressInfo,
  //     city: 'New York City'
  //   }
  // });

  handleBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  handleResolution = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: '720p'
        }
      }
    })
  }


// Create a button with the class 'resolution'. Clicking this button changes the settings.video.resolution state property to '720p'.

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.handleBitrate}>Update Bitrate</button>
        <button className="resolution" onClick={this.handleResolution}>Update Resolution</button>
      </div>
    )
  }

}


//React
import React, { Component } from 'react';

//Frameworks
import { OTSubscriber } from 'opentok-react'

export default class Subscriber extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      audio: true,
      video: true
    };
  }

  setAudio = () => {
    this.setState({ audio: !this.state.audio });
  }

  setVideo = () => {
    this.setState({ video: !this.state.video });
  }

  onError = (err) => {
    this.setState({ error: `Failed to subscribe: ${err.message}` });
  }

  render() {
    return (
      <div className="subcriber">
        {this.state.error ? <div>{this.state.error}</div> : null}
        <OTSubscriber
          properties={{
            subscribeToAudio: this.state.audio,
            subscribeToVideo: this.state.video,
            fitMode: "contain"
          }}
          properties={{ insertMode: "append", width: '100%', height: '100%' }}
          onError={this.onError}
          retry={true}
          maxRetryAttempts={3}
          retryAttemptTimeout={2000}
        />
      </div>
      
    );
  }
}

import React, { Component } from 'react';

import { OTSession, OTStreams, preloadScript } from 'opentok-react'
import Publisher from './Publisher';
import Subscriber from './Subcriber';

import Toast from '../../../utils/Toast';

class VideoCall extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            connected: false
        };

        this.sessionEvents = {
            sessionConnected: () => {
                this.setState({ connected: true });
            },
            sessionDisconnected: () => {
                this.setState({ connected: false });
            }
        };
    }

    componentWillMount() {
        //OT.registerScreenSharingExtension('chrome', config.CHROME_EXTENSION_ID, 2);
    }

    onError = (err) => {
        this.setState({ error: `Failed to connect: ${err.message}` });
        Toast("Error al conectar la video llamada.", "error");
    }

    render() {
        return (
            this.props.sessionid ?
                <OTSession
                    apiKey="46527582"
                    sessionId={this.props.sessionid}
                    token={this.props.token}
                    eventHandlers={this.sessionEvents}
                    onError={this.onError}
                >
                    {this.state.error ? <div>{this.state.error}</div> : null}
                    <Publisher consultancy={this.props.consultancy} />
                    <OTStreams>
                        <Subscriber />
                    </OTStreams>
                </OTSession>
                :
                null
        );
    }
}

export default VideoCall;
import React, { Component } from 'react';

import { OTPublisher } from 'opentok-react';

import Timer from './Timer';

import { IconButton, Tooltip } from '@material-ui/core';

import '../../../assets/styles/General/videoCall.scss';

//Icons
import {
    MicNoneOutlined,
    MicOffOutlined,
    VideocamOffOutlined,
    VideocamOutlined,
    ScreenShareOutlined,
    StopScreenShareOutlined
} from '@material-ui/icons';

export default class Publisher extends Component {
    constructor(props) {

        super(props);

        this.state = {
            error: null,
            audio: true,
            video: true,
            videoSource: undefined,
            open: true,
            record: false,
            publishScreen: false,
            

        };
        this.publisherScreenEventHandlers = {

            mediaStopped: () => {
                this.setState({ publishScreen: false });
            },

        };
    }




    setAudio = () => {
        this.setState({ audio: !this.state.audio });
    }

    setVideo = () => {
        this.setState({ video: !this.state.video });
    }

    setVideoSource = (videoSource) => {
        this.setState({ videoSource });
    }

    onError = (err) => {
        this.setState({ error: `Failed to publish: ${err.message}` });
    }

    onShareScreen = () => {
        this.setState((state) => ({
            publishScreen: !state.publishScreen,
        }));
        if (this.state.videoSource == undefined) {
            this.setState({ open: false });
            this.setState({ videoSource: 'screen' });
            this.setState({ open: true });
        } else {
            this.setState({ open: false });
            this.setState({ videoSource: undefined });
            this.setState({ open: true });
        }
    }




    render() {
        const { publishScreen } = this.state;
        return (

            <div >

                <div className="publisher">

                    {this.state.error ? <div>{this.state.error}</div> : null}
                    {this.state.open ?
                        <>  <OTPublisher className={publishScreen ? "Screenfalse" : "Screentrue"}
                            properties={{
                                publishVideo: this.state.video,
                                publishAudio: this.state.audio,

                                insertMode: "append",
                                width: this.state.videoSource === 'screen' ? '0%' : '100%',
                                height: this.state.videoSource === 'screen' ? '0%' : '100%',
                                fitMode: "contain",
                            }}
                            onError={this.onError} />

                            {publishScreen && (
                                <OTPublisher className={publishScreen ? "Screentrue" : "Screenfalse"}
                                    properties={{
                                        publishVideo: this.state.video,
                                        videoSource: 'screen',
                                        width: this.state.videoSource === 'screen' ? '100%' : '0%',
                                        height: this.state.videoSource === 'screen' ? '100%' : '0%',
                                        fitMode: "contain",
                                    }}
                                    onError={this.onError} />
                            )}
                        </>
                        :
                        null
                    }
                </div>

                <div className="buttons">
                    {!this.props.consultancy &&
                        <div className="spaceee" />
                    }
                    <IconButton onClick={this.setAudio}>
                        {
                            this.state.audio ?
                                <Tooltip title="Desactivar microfono" arrow >
                                    <MicNoneOutlined />
                                </Tooltip>
                                :
                                <Tooltip title="Activar microfono" arrow >
                                    <MicOffOutlined />
                                </Tooltip>
                        }
                    </IconButton>
                    <IconButton onClick={this.setVideo}>
                        {
                            this.state.video ?
                                <Tooltip title="Desactivar cámara" arrow >
                                    <VideocamOutlined />
                                </Tooltip>
                                :
                                <Tooltip title="Activar cámara" arrow >
                                    <VideocamOffOutlined />
                                </Tooltip>
                        }
                    </IconButton>
                    {this.props.consultancy && <>
                        <IconButton onClick={this.onShareScreen}>
                            {
                                !this.state.videoSource ?
                                    <Tooltip title="Compartir pantalla" arrow >
                                        <ScreenShareOutlined />
                                    </Tooltip>
                                    :
                                    <Tooltip title="Dejar de compartir pantalla" arrow >
                                        <StopScreenShareOutlined />
                                    </Tooltip>
                            }
                        </IconButton>
                        <Timer />
                    </>}
                </div>



            </div>
        );
    }
}
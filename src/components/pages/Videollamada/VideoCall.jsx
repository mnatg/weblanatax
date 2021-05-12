//React
import React, { Component, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    BackHandler,
    Alert,
    ActivityIndicator
} from 'react';

//Components
import RedirectComponent from './redirectComponent';
import { Loading } from '../../loading/loadingEmotic'
import Safe from "react-safe"

//FrameWorks - No quitar libreria que aparecen no usadas
import {
    OT,
    OTSession,
    OTPublisher,
    OTSubscriber,
    OTSubscriberView,preloadScript,
    OTStreams
} from 'opentok-react';

//opentok
import ConnectionStatus from './ConnectionStatus';
import Publisher from './Publisher';
import Subscriber from './Subscriber';


//Services
import CreateLobbyService from '../../../Services/Lobby/CreateLobby';
import GetEmployeeService from '../../../Services/Adviser/GetAdviser';
import CloseTalkSessionService from '../../../Services/TalkSession/CloseTalkSession';


// Styles
import '../../../assets/styles/General/videoCall.scss';

/*
import {
    Colors,
    Layout,
    FontSize,
    dimensions,
    MetricsSizes,
    MetricsSizesW,
    Images
} from '../../../Theme';

*/


import {
    Colors,
    dimensions,
    MetricsSizes,
    MetricsSizesW,
    Images
} from '../../../Theme';

//Se reeemplazo Icon de rect native
import ThreeDRotation from '@material-ui/icons/ThreeDRotation';
import { useLocation } from "react-router-dom";

const mainSubscribersResolution = { width: 1400 * 25.6, height: 720 };
const secondarySubscribersResolution = { width: 1400 * 7.04, height: 288 };
const DEFAULT_SCRIPT_URL = 'https://static.opentok.com/v2/js/opentok.min.js';

class VideoCall extends React.Component {

   
   

   
        //const state = props.location.state
        //console.log("videoCall: History state", props.location.state);

        //const location = useLocation();

        //const pathName = location.pathname;
        
        //console.log("videoCall: History pathname",pathName);
    
        //const stateH= location.state;
        //console.log("videoCall: History state", state);
       
       /* useEffect(() => {
            console.log(location.pathname); // result: '/secondpage'
            console.log(location.search); // result: '?query=abc'
            console.log(location.state); // result: 'some_value'
         }, [location]);
*/
    
    

   

    constructor (props) {
        
        super(props);
        console.log("parametros videoCall: ",this.props.location);
        this.apiKey = "46527582";
        this.sessionId = this.props.location.state.sessionId;
        console.log("sessionId: ",this.sessionId);        
        this.token = this.props.location.state.token;
        this.uid = this.props.location.state.uid;
        this.type = this.props.location.state.type;
        this.employeeId = this.props.location.state.employee;
        this.resolution = this.props.location.state.resolution;
        this.state = {
            loadingVideo : true,
            // subscribers: 0,
            subscriberIds: [], // Array for storing subscribers
            localPublishAudio: true, // Local Audio state
            localPublishVideo: true, // Local Video state
            joinCall: true, // State variable for storing success
            streamProperties: {}, // Handle individual stream properties,
            mainSubscriberStreamId: null,
            redirectOk: false,
            // sharedScreen: false
        };
        this.confirmation = this.confirmation.bind(this);
        this.TypeLogic();

      

        //Example props

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

       

        this.sessionEventHandlers = {
            streamCreated: (event) => {
                const streamProperties = {
                    ...this.state.streamProperties,
                    [event.streamId]: {
                        subscribeToAudio: true,
                        subscribeToVideo: true
                    },
                };
                this.setState({
                    streamProperties,
                    subscriberIds: [...this.state.subscriberIds, event.streamId],
                });
                console.log("streamCreated", this.state);
            },
            streamDestroyed: (event) => {
                const indexToRemove = this.state.subscriberIds.indexOf(event.streamId);
                const newSubscriberIds = this.state.subscriberIds;
                const streamProperties = { ...this.state.streamProperties };
                if (indexToRemove !== -1) {
                    delete streamProperties[event.streamId];
                    newSubscriberIds.splice(indexToRemove, 1);
                    this.setState({ subscriberIds: newSubscriberIds });
                }
            },
            error: error => {
                console.log('session error:', error);
            },
            otrnError: error => {
                console.log('Session otrnError error:', error);
            },
            sessionDisconnected: () => {
                this.setState({
                    streamProperties: {},
                    subscriberIds: [],
                });
                console.log('Session DISCONECT!!!');
            },
        };

        this.publisherEventHandlers = {
            streamCreated: (event) => {
                console.log('Publisher stream created!', event);
            },
            streamDestroyed: (event) => {
                console.log('Publisher stream destroyed!', event);
            },
        };

        this.subscriberEventHandlers = {
            connected: () => {
                // this.setState({subscribers: this.state.subscribers + 1});
                // if(this.state.subscribers > 1 ){
                //     this.setState({sharedScreen: true});
                // }
                console.log('[subscriberEventHandlers - connected]');
            },
            disconnected: () => {
                // this.setState({subscribers: this.state.subscribers - 1});
                // if(this.state.subscribers < 2 ){
                //     this.setState({sharedScreen: false});
                // }
                console.log('[subscriberEventHandlers - disconnected]');
            },
            error: error => {
                console.log('subscriberEventHandlers error:', error);
            },
        }

        this.publisherProperties = {
            cameraPosition: 'front',
            fitMode: 'contain',
            insertMode: 'append',
            resolution: this.props.location.state.resolution
        };
    }

    toggleLoadingSubscriber = () =>{
        this.setState({
            loadingVideo: !this.state.loadingVideo
        });
    };

    renderLoading = () => {
        console.log('status video '+ this.state.loadingVideo)
        if(this.state.loadingVideo){
            return (<ActivityIndicator size="large" color="#00ff00" style={{zIndex:0, position: 'absolute', alignSelf: 'center', top: 50 }}/>)
        } else {
            return null;
        }
    }

    toggleAudio = () => {
        let publishAudio = this.state.localPublishAudio;
        this.publisherProperties = { ...this.publisherProperties, publishAudio: !publishAudio };
        this.setState({
            localPublishAudio: !publishAudio,
        });
    };

    toggleVideo = () => {
        let publishVideo = this.state.localPublishVideo;
        this.publisherProperties = { ...this.publisherProperties, publishVideo: !publishVideo };
        this.setState({
            localPublishVideo: !publishVideo,
        });
        console.log('Video toggle', this.publisherProperties);
    };

    joinCall = () => {
        const { joinCall } = this.state;
        if (!joinCall) {
            this.setState({ joinCall: true });
        }
    };

    endCall = () => {
        const { joinCall } = this.state;
        if (joinCall) {
            this.setState({ joinCall: !joinCall });
        }
        this.props.navigation.replace('Lobby');
    };
    /**
     * // todo check if the selected is a publisher. if so, return
     * @param {*} subscribers 
     */

    
    handleSubscriberSelection = (subscribers, streamId) => {
        console.log("handleSubscriberSelection", streamId);
        let subscriberToSwap = subscribers.indexOf(streamId);
        let currentSubscribers = subscribers;
        let temp = currentSubscribers[subscriberToSwap];
        currentSubscribers[subscriberToSwap] = currentSubscribers[0];
        currentSubscribers[0] = temp;
        this.setState(prevState => {
            const newStreamProps = { ...prevState.streamProperties };
            for (let i = 0; i < currentSubscribers.length; i += 1) {
                if (i === 0) {
                    newStreamProps[currentSubscribers[i]] = { ...prevState.streamProperties[currentSubscribers[i]] }
                    newStreamProps[currentSubscribers[i]].preferredResolution = mainSubscribersResolution;
                } else {
                    newStreamProps[currentSubscribers[i]] = { ...prevState.streamProperties[currentSubscribers[i]] }
                    newStreamProps[currentSubscribers[i]].preferredResolution = secondarySubscribersResolution;
                }
            }
            console.log("mainSubscriberStreamId", streamId);
            console.log("streamProperties#2", newStreamProps);
            return { mainSubscriberStreamId: streamId, streamProperties: newStreamProps };
        })
    }

    handleScrollEnd = (event, subscribers) => {
        console.log("handleScrollEnd", event.nativeEvent) // event.nativeEvent.contentOffset.x 
        console.log("handleScrollEnd - events", event.target) // event.nativeEvent.contentOffset.x 
        let firstVisibleIndex;
        if (event && event.nativeEvent && !isNaN(event.nativeEvent.contentOffset.x)) {
            firstVisibleIndex = parseInt(event.nativeEvent.contentOffset.x / (1400 / 2), 10);
            console.log("firstVisibleIndex", firstVisibleIndex);
        }
        this.setState(prevState => {
            const newStreamProps = { ...prevState.streamProperties };
            if (firstVisibleIndex !== undefined && !isNaN(firstVisibleIndex)) {
                for (let i = 0; i < subscribers.length; i += 1) {
                    if (i === firstVisibleIndex || i === (firstVisibleIndex + 1)) {
                        newStreamProps[subscribers[i]] = { ...prevState.streamProperties[subscribers[i]] }
                        newStreamProps[subscribers[i]].subscribeToVideo = true;
                    } else {
                        newStreamProps[subscribers[i]] = { ...prevState.streamProperties[subscribers[i]] }
                        newStreamProps[subscribers[i]].subscribeToVideo = false;
                    }
                }
            }
            return { streamProperties: newStreamProps }
        })
        
    }

    chatRoom =() => {
        //history.push('ChatRoom', { adviserId: this.employeeId })} disabled={this.employeeId == undefined};
    }

    async  TypeLogic() {
        if (this.type == 'reception') {
            try {
                let lobby = {
                    "userid": this.uid,
                    "receptionist": this.employeeId
                }
                console.log('Create lobby!!!')
                await CreateLobbyService(lobby);
                await CloseTalkSessionService(this.sessionId);
            } catch (err) {
                console.error("Error al crear usuario en el lobby", err);
            }
        }
        let response = await GetEmployeeService(this.employeeId);
        this.employee = response;
    }

 

    // renderSubscribers = (subscribers) => {
    //     console.log("renderSubscribers", subscribers);
    //     console.log("this.state.subscriberIds", this.state.subscriberIds);
    //     console.log("this.state.mainSubscriberStreamId", this.state.mainSubscriberStreamId);
    //     if (this.state.mainSubscriberStreamId) {
    //         subscribers = subscribers.filter(sub => sub !== this.state.mainSubscriberStreamId);
    //         subscribers.unshift(this.state.mainSubscriberStreamId);
    //     }
    //     console.log("renderSubscribers - sorted", subscribers);
    // return subscribers.length > 1 ? (
    //     <>
    //         <div style={styles.mainSubscriberStyle}>
    //             <TouchableOpacity
    //                 onPress={() => this.handleSubscriberSelection(subscribers, subscribers[0])}
    //                 key={subscribers[0]}>
    //                 <OTSubscriberView
    //                     streamId={subscribers[0]}
    //                     style={{
    //                         width: '100%', height: '100%', zIndex: 3
    //                     }}
    //                 />
    //             </TouchableOpacity>
    //         </div>
    //     </>
    // ) : subscribers.length > 0 ? (
    //     <TouchableOpacity style={styles.fullView}>
    //         <OTSubscriberView streamId={subscribers[0]}
    //             key={subscribers[0]}
    //             style={{ width: '100%', height: '100%', zIndex: 3 }
    //             }
    //         />
    //     </TouchableOpacity>
    // ) : (<Text>No one connected</Text>)
    // };

    // Backprevent

    
     componentDidMount() {
       // this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => this.confirmation(this.type));
    }
     componentWillUnmount() {
       // this.backHandler.remove();
    }
     confirmation(type) {
        if (type == 'reception') {
            Alert.alert(
                '¿Desea salir de la aplicación?',
                'No podrá volver a contactar con recepción.\nQuedará a la espera de un consultor.',
                [
                    { text: 'No', onPress: () => null },
                    { text: 'Sí', onPress: () => BackHandler.exitApp() },
                ]);
            return true;
        } else if (type == 'consultancy') {
            Alert.alert(
                '¿Desea salir de la llamada?',
                'Puede volver al asesoramiento en otro momento.',
                [
                    { text: 'No', onPress: () => null },
                    { text: 'Sí', onPress: () => this.endCall() },
                ]);
            return true;
        }
    }

    renderSubscribers = (subscribers) => {
        console.log("Subscribers: ", subscribers);
        if (subscribers.length == 2) {
            return (<>
                <TouchableOpacity
                    key={subscribers[0]}
                >
                    <OTSubscriberView streamId={subscribers[0]} style={{ display: 'none' }} />
                </TouchableOpacity>
                <TouchableOpacity
                    key={subscribers[1]}
                >
                    <OTSubscriberView streamId={subscribers[1]} style={styles.subscriber} />
                </TouchableOpacity>
            </>)
        } else {
            return subscribers.map((streamId) => (
                subscribers.length > 1 ? (
                    <>
                        <div style={styles.mainSubscriberStyle}>
                            <TouchableOpacity

                                key={streamId}>
                                <OTSubscriberView
                                    streamId={streamId}
                                    style={styles.subscriber}
                                />
                            </TouchableOpacity>
                        </div>
                    </>
                ) : subscribers.length > 0 ? (
                    <TouchableOpacity style={styles.fullView}>
                        <OTSubscriberView streamId={streamId}
                            style={styles.subscriber}
                        />
                    </TouchableOpacity>
                ) : (<Text>No one connected</Text>)
            ));
        }
    };

    videoView = () => {
        return (
            <>
               <div>
       {
           (this.type != 'consultancy') ?
               <RedirectComponent  resolution={this.resolution} /> : null

       }
   </div>
   <div style={styles.fullView}>
       <OTSession
           apiKey={this.apiKey}
           sessionId={this.sessionId}
           token={this.token}
           eventHandlers={this.sessionEventHandlers}>
           <div style={styles.publisherStyle}>
               {this.renderLoading()
               }
               <OTPublisher
                   properties={this.publisherProperties}
                   eventHandlers={this.publisherEventHandlers}
                   style={styles.publisher}
               />
               <div style={styles.borderPublisher}></div>
           </div>
           <div style={styles.subscriberContainer} >
               {/* <OTSubscriber style={[styles.subscriber, this.state.sharedScreen && styles.sharedScreen]}
                   eventHandlers={this.subscriberEventHandlers}
                   streamProperties={this.state.streamProperties}
                   properties={{ fitMode: "cover", insertMode: 'append' }}
               >
               </OTSubscriber> */}
               {this.renderLoading()}
               <OTSubscriber>
                   {this.renderSubscribers}
               </OTSubscriber>
           </div>
       </OTSession>
   </div>

   <ImageBackground source={Images.callBottom} style={[styles.buttonView]}>
       <TouchableOpacity style={styles.iconStyle} onPress={this.toggleAudio}>
           <ThreeDRotation
               color="white"
               name={this.state.localPublishAudio ? 'volume-down' : 'volume-off'}
               size={MetricsSizes.regularMoreLarge}
           />
       </TouchableOpacity>
       <div style={styles.space}></div>
       {
           (this.type == 'consultancy') ?
               <TouchableOpacity style={styles.finishBtn} onPress={this.endCall}>
                   <ThreeDRotation
                       name='phone'
                       color="white"
                       size={MetricsSizes.large}
                   />
               </TouchableOpacity>
               :
               null
       }
       <TouchableOpacity style={styles.iconStyle} onPress={this.toggleVideo}>
           <ThreeDRotation
               color="white"
               name={this.state.localPublishVideo ? 'videocam' : 'videocam-off'}
               size={MetricsSizes.regularMoreLarge}
           />
       </TouchableOpacity>
       {
           (this.type == 'consultancy') ?
               <TouchableOpacity style={styles.iconStyle} onPress={() => this.props.navigation.navigate('ChatRoom', { adviserId: this.employeeId })} disabled={this.employeeId == undefined}>
                   <ThreeDRotation
                       color="white"
                       name='sms'
                       size={MetricsSizes.regularMoreLarge}
                   />
               </TouchableOpacity>
               :
               null
       }

       {
           this.employee && (this.state.subscriberIds.length >= 1) ?
               <div style={styles.employeeInfo}>
                   <Text style={styles.employeeName}>
                       {this.employee.fullname}
                   </Text>
                   <Text style={styles.employeeCharge}>
                       {this.type == 'consultancy' ? 'Asesor' : 'Recepcionista'} {' Comercial de M&A TAX GROUP'}
                   </Text>
               </div>
               :
               <div style={styles.employeeInfo}>
                   <Text style={styles.employeeCharge}>
                       Conectando con su {this.type == 'consultancy' ? 'Asesor' : 'Recepcionista'}
                   </Text>
               </div>
       }

   </ImageBackground>




            </>
        );
    };

//Recepcionista es el suscriber, usuario es publisher
    videoViewTest = () => {
        return (
            <>
           
            <div>
       {
           (this.type != 'consultancy') ?
               <RedirectComponent  resolution={this.resolution} /> : null
       }
   </div>

   <div className="video-container">
       <OTSession
              apiKey={this.apiKey}
              sessionId={this.sessionId}
              token={this.token}
              eventHandlers={this.sessionEvents}
              onError={this.onError}>
               {this.renderLoading()}   
               <Publisher
                   properties={this.publisherProperties}
                   eventHandlers={this.publisherEventHandlers}
                   style={styles.publisher}
               />
               {this.renderLoading()}
               <OTStreams>
        <Subscriber>{this.renderSubscribers}</Subscriber>
        </OTStreams>
       </OTSession>
       </div>

      
   
           

            </>
        );
    };

render() {

   
        return this.joinCall ? this.videoViewTest() : null;

        //return (<> </>);
    
   
}



       
}






// todo remember to twick the styles to not copy agora

const styles = {
    buttonView: {
        height: 1400 * 0.25,
        width: '100%',
        position: 'absolute',
        bottom: 0,
        left: 0,
        justifyContent: 'center',
        alignContent: 'center',
        zIndex: 5
    },
    iconStyle: {
        fontSize: 10,
        paddingTop: MetricsSizes.regular,
        paddingBottom: MetricsSizes.regular,
        marginRight: '2%',
        marginLeft: '5%',
        backgroundColor: 'transparent'
        /* borderRadius: 50 */
    },
    finishBtn: {
        fontSize: 10,
        marginRight: '5%',
        marginLeft: '5%',
        width: 1400 * 1.5,
        height: 1400 * 1.5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        backgroundColor: Colors.red,
        color: 'white',
        zIndex: 6
    },
    finishGreenBtn: {
        fontSize: 10,
        position: 'relative',
        top: 1400 * 0.72,
        left: 1400 * 0.4,
        width: 1400 * 1.5,
        height: 1400 * 1.5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        backgroundColor: Colors.aquamarine,
        color: 'white',
        zIndex: 6
    },
    fullView: {
        height: 1200 * 0.9,
        width: 1200,
        position: 'absolute',
        backgroundColor: 'black'
    },
    footer: {
        fontSize: 10,
        fontWeight: '600',
        padding: 4,
        paddingRight: MetricsSizesW.smallW * 1.2,
        textAlign: 'right',
    },
    publisherStyle: {
        width: 1200,
        height: 1200,
        position: 'absolute',
        bottom: '18%',
        left: 0,
        zIndex: 20
    },
    mainSubscriberStyle: {
        height: (1400 * 3) / 4 - 50,
        zIndex: 3
    },
    secondarySubscribers: {
        height: 1400 / 4,
    },
    space: {
        fontSize: 10,
        marginRight: '5%',
        marginLeft: '5%',
    },
    employeeInfo: {
        position: 'absolute',
        bottom: '25%',
        left: '5%'
    },
    employeeName: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 10
    },
    employeeCharge: {
        fontFamily: 'Roboto',
        fontSize: 10,
        fontWeight: '500',
        color: 'white'
    },
    publisher: {
        width: 1400,
        height: 1400 * 0.20
    },
    subscriberContainer: {
        zIndex: 3,
        marginTop: 1400 * 0.15
    },
    subscriber: {
        height: 1400 * 0.28,
        width: 1400
    },
    sharedScreen: {
        marginTop: -1400 * 0.2
    },
    loading: {
        marginTop: 1400 * 0.57
    },
    borderPublisher: {
        borderWidth: 1400 * 0.02,
        borderStyle: 'solid',
        borderRadius: 20,
        borderColor: '#000000',
        marginTop: -1400 * 0.21,
        marginLeft: -1400 * 0.015,
        width: 1400 * 0.38,
        height: 1400 * 0.22
    }
};


export default preloadScript(VideoCall);
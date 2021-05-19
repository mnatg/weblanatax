//React
import React, { useEffect, useRef, useState } from 'react'

//Chat FrameWork
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//Credentials
import firebaseConfig from '../../../firebase-config';

//Hooks
import { useCollectionData } from 'react-firebase-hooks/firestore';

// Icons
import { DescriptionOutlined, SendOutlined } from '@material-ui/icons';

//SCSS
import "../../../assets/styles/chat.scss"

//Utils
import Moment from 'react-moment';

//Service
import SendNotificationService from '../../../services/sendNotification';

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const firestore = firebase.firestore();

const Chat = ({ userId, adviserId, clientName = "nadie", reception = false }) => {
  return (
    <div className="chat-height">
      { clientName !== "nadie" &&
        <div className="chat-title" >Hablando con {clientName}</div>}
      <ChatRoom userId={userId} adviserId={adviserId} reception={reception} />
    </div>
  )
}

function ChatRoom({ userId, adviserId, reception }) {
  const endChat = useRef(null);
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.where('userId', '==', userId).where('adviserId', '==', adviserId).orderBy('createdAt', 'asc');

  const [messages] = useCollectionData(query, { idField: 'id' });
  const [formValue, setFormValue] = useState('');

  const scrollToBottom = () => {
    endChat.current.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(scrollToBottom, [messages]);

  const sendMessage = async (e) => {
    e.preventDefault();

    const { displayName } = auth.currentUser;

    await messagesRef.add({
      user: displayName,
      body: formValue,
      createdAt: new Date(),
      adviserId: adviserId,
      userId: userId,
      from: !reception ? 'adviser' : 'reception',
      type: 'text'
    })

    setFormValue('');
    await SendNotificationService({
      tittle: `Nuevo Mensaje de ${!reception ? 'consultor:' : 'recepción:'} ${displayName}`,
      content: formValue,
      to: !reception ? userId : adviserId,
      redirect: '/chats'
    });
  }

  return (
    <div className="chat">
      <div className="chat-text">
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} reception={reception} />)}
        <span className='end-messages' ref={endChat}>Phantom text</span>
      </div>

      <form onSubmit={sendMessage} className="chat-input">
        <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Escribe tu mensaje..." />
        <div>
          <button type="submit" disabled={!formValue}>
            <SendOutlined />
          </button>
        </div>
      </form>

    </div>
  )
}



function ChatMessage(props) {
  const { user, body, from, photoURL, createdAt, type } = props.message;  
  let messageClass = from == 'adviser' ? 'adviser-message' : 'user-message';
  if(props.reception) {
    if (messageClass == 'adviser-message' ) {
      messageClass = 'user-message'
    } else {
      messageClass = 'adviser-message'
    }
  }
  const date = createdAt != null ? new Date(createdAt.seconds * 1000) : new Date();
  return (
    <div className={`${messageClass}`}>
      {
        type == 'image' ?
          <a href={body} target="_blank">
            <img className="chat-image"
              src={body} />
          </a>
          : type == 'document' ?
            <a className="chat-document"
              href={body} target="_blank">
              <DescriptionOutlined />
              <p>Documento</p>
            </a>
            : type == 'text' &&
            <p className="text">{body}</p>
      }

      <p className="date">
        <Moment date={date} format="DD/MM/YYYY hh:mm:ss" />
      </p>
    </div>
  )
}

export default Chat
//React
import React, { useEffect, useRef, useState } from 'react'

//Chat FrameWork
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//Credentials
import firebaseConfig from '../../firebase-config';

//Hooks
import { useCollectionData } from 'react-firebase-hooks/firestore';

// Icons
import { DescriptionOutlined, SendOutlined } from '@material-ui/icons';

//Utils
import Moment from 'react-moment';

//Service
import SendNotificationService from '../../Services/Notication/SendNotification';

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const firestore = firebase.firestore();

function ChatRoom({ userId, adviserId }) {
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
      from: 'client',
      type: 'text'
    })

    setFormValue('');
    await SendNotificationService({
      tittle: `Nuevo Mensaje de ${displayName}`,
      content: formValue,
      to: userId,
      redirect: '/chats'
    });
  }

  return (
    <div className="chat">
      <div className="chat-text">
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
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
  const { body, from, createdAt, type } = props.message;  
  let messageClass = from == 'adviser' ? 'adviser-message' : 'user-message';
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

export default ChatRoom;
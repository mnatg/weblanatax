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

// Components
import { IconButton } from '@material-ui/core';

// Icons
import {
  DescriptionOutlined,
  SendOutlined,
  AttachFileOutlined
} from '@material-ui/icons';

//Utils
import Moment from 'react-moment';
import moment from "moment";
import Toast from '../../utils/Toast';

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
  const [file, setFile] = useState({});

  const scrollToBottom = () => {
    endChat.current.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(scrollToBottom, [messages]);

  const sendMessage = async (e) => {
    e.preventDefault();

    const { displayName } = auth.currentUser;

    let messageType = 'text';
    let path = null;

    if(file) {
      let fileType = file.type.split('/');
      try {
        let currentDate = moment().format('yyyy-MM-DD');
        let storageRef = firebase.storage().ref(userId + "/" + currentDate + "/" + file.name);
        await storageRef.put(file);
        path = await storageRef.getDownloadURL();
        if (fileType[0] == 'image') {
          messageType = 'image';
        } else {
          messageType = 'document';
        }
      } catch (error) {
          console.error(error);
          return Toast("Error al cargar el fichero: " + file.name, "error");
      }
    }

    await messagesRef.add({
      user: displayName,
      body: !path ? formValue : path,
      createdAt: new Date(),
      adviserId: adviserId,
      userId: userId,
      from: 'user',
      type: messageType
    })

    setFile({});
    setFormValue('');
    await SendNotificationService({
      tittle: `Nuevo Mensaje de ${displayName}`,
      content: !path ? formValue : path,
      to: userId,
      redirect: '/chats'
    });
  }

  const hadleFileUpload = (e) => {
    let uploadFile = {};
    for (let file of e.target.files) {
        if (file.size < 20000000) {
            uploadFile = file;
        } else {
            Toast("El fichero [" + file.name + "] excede el limite de tamaño permitido.", "error");
        }
    }
    setFile(uploadFile);
    setFormValue(uploadFile.name);
  }

  return (
    <div className="chat">
      <div className="chat-text">
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
        <span className='end-messages' ref={endChat}>Phantom text</span>
      </div>

      <form onSubmit={sendMessage} className="chat-input">
        <IconButton
          className="file-input"
          component="label"
        >
          <AttachFileOutlined style={{ color: '#009245' }} />
          <input
            type="file"
            multiple={false}
            hidden
            onChange={(e) => hadleFileUpload(e)}
          />
        </IconButton>
        {/* <input type="file" className="file-input" onChange={(e) => hadleFileUpload(e)} max-size="20480" /> */}
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
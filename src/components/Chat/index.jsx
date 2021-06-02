// React
import React from 'react';
// Components
import { Modal } from '@material-ui/core';
import ChatRoom from './ChatRoom';
//SCSS
import "../../assets/styles/General/chat.scss"

const Chat = ({ userId, adviserId, open, handleClose, adviserName = "nadie" }) => {
  return (
      <Modal open={open} onClose={handleClose} >
        <div className="chat-height" >
        { adviserName !== "nadie" &&
            <div className="chat-title" >Hablando con {adviserName}</div>}
        <ChatRoom userId={userId} adviserId={adviserId} />
        </div>
      </Modal>
  )
}

export default Chat
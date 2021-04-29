// React
import React, { useState, useCallback, useEffect } from 'react'
import {
  View,
  Text,
  Dimensions,
  Linking
} from 'react-native'
// Redux
import { useDispatch, useSelector } from 'react-redux'
// Components
import { ChatActions } from '@/Components'
// Firebase
import firestore from '@react-native-firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';
// Styles
import { Layout, MetricsSizes } from '@/Theme'
import Icon from 'react-native-vector-icons/Ionicons';
import { GiftedChat } from 'react-native-gifted-chat';
//Services
import SendNotificationService from '../../Services/Notication/SendNotification';

// layout numbers
const SCREEN_HEIGHT = Dimensions.get('window').height
const STATUS_BAR_HEIGHT = 40  // i know, but let's pretend its cool
const CHAT_MAX_HEIGHT = SCREEN_HEIGHT - STATUS_BAR_HEIGHT


const ChatRoomContainer = ({ navigation, route }) => {
  const [chatMessages, setChatMessages] = useState([]);
  const dispatch = useDispatch()
  const userInfo = useSelector((state) => state.auth.user)
  const messagesRef = firestore().collection('messages');
  const query = messagesRef.where('userId', '==', userInfo.uid).where('adviserId', '==', route.params.adviserId).orderBy('createdAt', 'asc');
  const [messages] = useCollectionData(query, { idField: 'id' });

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        null
      ),
    });
  }, [navigation]);

  useEffect(() => {
    init();
  }, [messages]);

  const init = async () => {
    addInitialMessages(messages);
  }

  const addInitialMessages = async (messages) => {
    let chatMessages = [];
    if (messages) {
      for (let message of messages) {
        let GiftedChatMessage = {
          _id: Math.random(),
          createdAt: message.createdAt != null ? new Date(message.createdAt.seconds * 1000) : new Date()
        }
        if (message.from == 'adviser') {
          GiftedChatMessage.user = {
            _id: message.adviserId,
            name: message.adviserId
          }
        } else {
          GiftedChatMessage.user = {
            name: userInfo.email,
            avatar: userInfo.photoURL
          }
        }
        if (message.type == 'text') {
          GiftedChatMessage.text = message.body
        } else if (message.type == 'image') {
          GiftedChatMessage.image = message.body
        } else if (message.type == 'document') {
          const element =
            <Text style={{ color: 'white', paddingTop: MetricsSizes.tiny, textDecorationLine: 'underline' }} onPress={async () => {
              const supported = await Linking.canOpenURL(message.body);
              if (supported) {
                await Linking.openURL(message.body);
              } else {
                Alert.alert(`Don't know how to open this URL: ${message.body}`);
              }
            }}>
              <Icon
                name='document-outline'
                size={18}
                color="white"
              />
              &#10;
              Archivo
            </Text>;
          GiftedChatMessage.text = element
        }

        chatMessages.push(GiftedChatMessage);
      }
      setChatMessages(chatMessages.reverse());
    }

  }

  const onSend = useCallback((msg = [], document) => {
    msg = checkProfileImage(msg);
    setChatMessages(previousMessages => GiftedChat.append(previousMessages, msg))
    if (!document) {
      if (msg[0].image) {
        messagesRef.add({
          user: userInfo.name,
          body: msg[0].image,
          createdAt: new Date(),
          adviserId: route.params.adviserId,
          userId: userInfo.uid,
          from: 'user',
          type: 'image'
        });
      } else {
        messagesRef.add({
          user: userInfo.name,
          body: msg[0].text,
          createdAt: new Date(),
          adviserId: route.params.adviserId,
          userId: userInfo.uid,
          from: 'user',
          type: 'text'
        });
      }
    } else {
      messagesRef.add({
        user: userInfo.name,
        body: msg[0].text,
        createdAt: new Date(),
        adviserId: route.params.adviserId,
        userId: userInfo.uid,
        from: 'user',
        type: 'document'
      });
    }
    console.log(userInfo);
    SendNotificationService({
      tittle: "Nuevo Mensaje de: " + userInfo.email,
      content: msg[0].image ? msg[0].image : msg[0].text,
      to: route.params.adviserId
    });

  }, []);

  const checkProfileImage = (chatMessages) => {
    if (!chatMessages[0].user.name) {
      let user = userInfo.email;
      chatMessages[0].user = {
        name: user,
        avatar: userInfo.photoURL
      }
    }
    return chatMessages;
  }

  const renderComposer = () => (
    <View style={Layout.row}>
      <ChatActions sendImage={onSend} />
    </View>
  )

  return (
    <View style={{ flex: 1, paddingTop: STATUS_BAR_HEIGHT }}>
      <GiftedChat
        messages={chatMessages}
        onSend={(msg) => onSend(msg)}
        maxHeight={CHAT_MAX_HEIGHT}
        renderActions={renderComposer}
        infiniteScroll
      />
    </View>
  )
}

export default ChatRoomContainer

import * as React from "react";
import { FlatList } from "react-native";

import { useLayoutEffect, useState, useCallback, useEffect } from "react";

import { View, Text } from "../components/Themed";
import { AntDesign } from "@expo/vector-icons";

import { TouchableOpacity } from "react-native-gesture-handler";
import { Avatar } from "react-native-elements";

import { GiftedChat } from 'react-native-gifted-chat'

import ChatListItem from '../components/ChatListItem';
import ChatRooms from '../Data/ChatRooms';
import NewTopicButton from "../components/NewTopicButton";

import { auth, db } from "../Setup";
import { dismissBrowser } from "expo-web-browser";


/*
export default function ChatScreen() {

    return (
        <View>
            <FlatList
                style={{width: '100%'}}
                data={ChatRooms}
                renderItem={({ item }) => <ChatListItem chatRoom={item} />}
                keyExtractor={(item) => item.id}
            />
            <NewTopicButton/>
        </View>
    );
};
*/

/*
export default function ChatScreen() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Hello developper',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://zupimages.net/up/22/01/nu7y.jpeg',
                },
            },
        ])
    }, [])
    
    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
        const {
            _id,
            createdAt,
            text,
            user,
        } = messages[0]
        db.collection('chats').add({
            _id,
            createdAt,
            text,
            user,
        })
    }, []);

    return (
        <GiftedChat
            messages={messages}
            showAvatarForEveryMessage={true}
            onSend={messages => onSend(messages)}
            user={{
                _id: auth?.currentUser?.email,
                name: auth?.currentUser?.displayName,
                avatar: auth?.currentUser?.photoURL
            }}
        />
    )
}
*/

const ChatScreen = ({ navigation }) => {

    const [messages, setMessages] = useState([]);

    /*
    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Hello developer',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://zupimages.net/up/22/01/nu7y.jpeg',
                },
            },
        ])
    }, []);
    */

    useLayoutEffect(() => {
        const unsubscribe = db.collection('chats').orderBy('createdAt', 'desc').onSnapshot(snapshot=>setMessages(
            snapshot.docs.map(doc=>({
                _id:doc.data()._id,
                createdAt:doc.data().createdAt.toDate(),
                text:doc.data().text,
                user:doc.data().user,
            }))
        ))
        return unsubscribe
    }, [])

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
        const {
            _id,
            createdAt,
            text,
            user,
        }=messages[0]
        db.collection('chats').add({
            _id,
            createdAt,
            text,
            user
        })
    }, [])

    return (
        <GiftedChat
            renderUsernameOnMessage={true}
            messages={messages}
            showAvatarForEveryMessage={true}
            onSend={messages => onSend(messages)}
            user={{
                _id: auth?.currentUser?.email,
                nom: auth?.currentUser?.displayName,
            }}
        />
    )

}
export default ChatScreen
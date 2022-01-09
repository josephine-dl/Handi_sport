import React, { useLayoutEffect, useState, useCallback } from "react";
import { View } from "react-native";
import { auth, db } from "../firebase";
import { AntDesign } from '@expo/vector-icons'
import { TouchableOpacity } from "react-native-gesture-handler";
import { Avatar } from "react-native-elements";
import { GiftedChat } from "react-native-gifted-chat";

const ChatScreen = ({navigation}) => {

    const [messages, setMessages] = useState([])

    useLayoutEffect(() => {
        const unsubscribe = db.collection('chats').orderBy('createdAt','desc').onSnapshot(snapshot=>setMessages(
            snapshot.docs.map(doc=>({
                _id:doc.data()._id,
                createdAt:doc.data().createdAt.toDate(),
                text:doc.data().text,
                user:doc.data().user
            }))
        ))
        return unsubscribe
    }, [])

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages,messages))
        const {
            _id,
            createdAt,
            text,
            user
        }=messages[0]
        db.collection('chats').add({
            _id,
            createdAt,
            text,
            user
        })
    }, [])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft:() =>(
                <View style={{marginLeft: 20}}>
                    <Avatar
                        rounded
                        source={{uri:auth?.currentUser?.photoURL}}
                    />
                </View>
                
            ),
            headerRight:() =>(
                <TouchableOpacity 
                    style={{marginRight: 30}}
                    onPress={signOut}
                >
                    <AntDesign 
                        name="logout" 
                        size={24}
                        color="black" 
                    />
                </TouchableOpacity>
                
            )
        })
    }, [])

    const signOut = () => {
        auth.signOut().then(() => {
            navigation.replace('Login')
        }).catch((error) => {

        })
    }
    return (
       <GiftedChat
            renderUsernameOnMessage={true}
            showAvatarForEveryMessage={true}
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{
                _id: auth?.currentUser?.email,
                name: auth?.currentUser?.displayName,
                avatar: auth?.currentUser?.photoURL,
            }}
        />
    )
}

export default ChatScreen
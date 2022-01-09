import React, { useLayoutEffect, useState, useCallback } from "react";
import { View } from "react-native";
import { auth, db } from "../../Setup";
import { Avatar } from "react-native-elements";
import { GiftedChat } from "react-native-gifted-chat";

const ExperiencesScreen = ({navigation}) => {

    const [messages, setMessages] = useState([])

    useLayoutEffect(() => {
        const unsubscribe = db.collection('experiences').orderBy('createdAt','desc').onSnapshot(snapshot=>setMessages(
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
        db.collection('experiences').add({
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
        })
    }, [])

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

export default ExperiencesScreen
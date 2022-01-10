import React, { useLayoutEffect, useState, useCallback } from "react";
import { View } from "react-native";
import { auth, db } from "../../Setup";
import { AntDesign } from '@expo/vector-icons'
import { TouchableOpacity } from "react-native-gesture-handler";
import { Avatar } from "react-native-elements";
import { GiftedChat } from "react-native-gifted-chat";
import firebase from "firebase";

const ConseilsScreen = ({navigation}) => {

    const [messages, setMessages] = useState([])
    var nom = ''

    const nomUser = firebase.database().ref('/Utilisateurs/Personnes en situation de handicap/').on('value', (snapshot)  => {
        snapshot.forEach((child) =>{
            if((child.val().mail.toLowerCase()).localeCompare(auth?.currentUser?.email.toLowerCase()) == 0){
                nom = child.val().nomPrenomPseudo
            }
        })
    })


    useLayoutEffect(() => {
        const unsubscribe = db.collection('conseils').orderBy('createdAt','desc').onSnapshot(snapshot=>setMessages(

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
        db.collection('conseils').add({
            _id,
            createdAt,
            text,
            user
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
                        name: nom,
                        avatar: auth?.currentUser?.photoURL,
                    }}
                />
        
    )
}

export default ConseilsScreen
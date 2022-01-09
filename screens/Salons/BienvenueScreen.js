import React, { useLayoutEffect, useState, useCallback } from "react";
import { View } from "react-native";
import { auth, db } from "../../Setup";
import { AntDesign } from '@expo/vector-icons'
import { TouchableOpacity } from "react-native-gesture-handler";
import { Avatar } from "react-native-elements";
import { GiftedChat } from "react-native-gifted-chat";

const BienvenueScreen = ({navigation}) => {

    const [messages, setMessages] = useState([])

    useLayoutEffect(() => {
        const unsubscribe = db.collection('bienvenue').orderBy('createdAt','desc').onSnapshot(snapshot=>setMessages(
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
        db.collection('bienvenue').add({
            _id,
            createdAt,
            text,
            user
        })
    }, [])

    useLayoutEffect(() => {
        navigation.setOptions({
                headerLeft:() =>(
                <TouchableOpacity 
                    style={{marginRight: 30}}
                    onPress={goBack}
                >
                    <AntDesign 
                        name="logout" 
                        size={24}
                        color="black" 
                    />
                </TouchableOpacity>
                
            ),
        
        })
    }, [])

    const goBack = () => {
        const navigation = useNavigation();
        {
            navigation.navigate('Bienvenue')
        }
    }

    return (
        <View>
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
        
            <NewTopicBienvenueButton/>
        </View>
        
    )
}

export default BienvenueScreen
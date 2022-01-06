import React from "react";

import { useRoute } from "@react-navigation/native";
import { FlatList, Text, StyleSheet, View } from "react-native";

import chatRoomData from '../Data/Chats';
import ChatMessage from "../components/ChatMessage";
import InputBar from "../components/InputBar";


const ChatRoomScreen = () => {

    const route = useRoute();

    //console.log(route.params)

    return (
        <View>
            <FlatList
                data={chatRoomData.messages}
                renderItem={({ item }) => <ChatMessage message={item}/>}
                inverted
            />

            <InputBar/>
            
        </View>
        
    );
}
export default ChatRoomScreen;
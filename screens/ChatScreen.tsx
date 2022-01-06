import * as React from "react";
import { FlatList } from "react-native";

import { View } from "../components/Themed";

import ChatListItem from '../components/ChatListItem';
import ChatRooms from '../Data/ChatRooms';
import NewTopicButton from "../components/NewTopicButton";

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

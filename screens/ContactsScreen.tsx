import * as React from "react";
import { FlatList } from "react-native";

import { View } from "../components/Themed";

import ContactListItem from '../components/ContactListItem';
import users from '../Data/Users';

export default function Contacts() {

    return (
        <View>
            <FlatList 
                style={{width: '100%'}}
                data={users}
                renderItem={({ item }) => <ContactListItem user={item} />}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

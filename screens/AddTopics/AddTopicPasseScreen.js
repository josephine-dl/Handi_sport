import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { auth, db } from "../../firebase";
import { AntDesign } from '@expo/vector-icons'
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { Avatar } from "react-native-elements";
import { GiftedChat } from "react-native-gifted-chat";
import addDoc from 'firebase/firestore'
import { Input, Button } from "react-native-elements";
import ChatScreen from "../ChatScreen";
import { StyleSheet, View } from "react-native";

const AddTopicPasseScreen = () => {
    const [titleTopic, setTitleTopic] = useState('')
    return (
        <View style={styles.container}>
            <Input
                placeholder="Entrer le nom du nouveau topic"
                label="Topic"
                leftIcon={{type:'entypo',name:'new-message'}}
                value={titleTopic}
                onChangeText={text => setTitleTopic(text)}
                multiline
                numberOfLines={6}
            />
            <Button 
                title="Ajouter" 
                style={styles.button}
                onPress={ChatScreen}
            />
        </View>
    
    )

}
export default AddTopicPasseScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
    },
    button: {
        width: 200,
        marginTop: 10,
    }
})
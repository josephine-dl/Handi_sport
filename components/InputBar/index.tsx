import React, { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { FontAwesome5, Fontisto, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

const InputBar = () => {

    const [message, setMessage] = useState('');

    const onMicrophonePress = () => {
        console.warn('Microphone')
    }

    const onSendPress = () => {
        console.warn(`Sending: ${message}`)

        //send the message to the backend

        setMessage('');
    }

    const onPress = () => {
        if (!message) {
            onMicrophonePress();
        } else {
            onSendPress();
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                    <Fontisto name="smiley" size={28} color="white" />
            </View>
            <View style={styles.mainContainer}>
                <TextInput 
                    placeholder={"Tapez votre message..."}
                    style={styles.textInput}
                    multiline
                    numberOfLines={6}
                    value={message}
                    onChangeText={setMessage}
                />
                <MaterialIcons name="attach-file" size={24} color='#00CCCB' style={styles.icon} />
            </View>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.buttonContainer}>
                    {!message 
                        ? <FontAwesome5 name="microphone-alt" size={28} color="white" />
                        : <MaterialCommunityIcons name="send" size={28} color="white" />}
                </View>
            </TouchableOpacity>
            
        </View>
    )
}
export default InputBar;

function initialState(initialState: any, arg1: string): [any, any] {
    throw new Error("Function not implemented.");
}

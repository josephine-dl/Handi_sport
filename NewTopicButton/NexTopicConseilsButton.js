import React from "react";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";

export const NewTopicConseilsButton = () => {

    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate('Add Topic Conseils');
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <MaterialCommunityIcons name="message-plus" size={24} color="white" />
            </TouchableOpacity>
        </View>
    )
}

export const styles=StyleSheet.create({
    container:{
        backgroundColor: '#00CCCB',
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 20,
        right: 20
    }
})
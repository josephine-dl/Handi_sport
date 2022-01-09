import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./styles";

const ExperiencesLink = () => {
    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate('Vos expériences');
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.blocSalon}>
                    <Text style={styles.titleSalon}>Vos expériences</Text>
                    <Text style={styles.description}>Venez partager avec nous vos expériences !</Text>
                </View>          
            </TouchableOpacity>
             
        </View>
    )

}

export default ExperiencesLink
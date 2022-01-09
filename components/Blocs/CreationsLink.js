import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./styles";

const CreationLink = () => {
    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate('Vos Créations Personnelles');
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.blocSalon}>
                    <Text style={styles.titleSalon}>Vos créations personnelles</Text>
                    <Text style={styles.description}>Vous possédez des talents artistiques ? Venez donc les partager ici !</Text>
                </View>         
            </TouchableOpacity>
             
        </View>
    )

}

export default CreationLink

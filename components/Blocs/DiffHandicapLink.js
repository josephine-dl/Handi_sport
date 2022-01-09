import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./styles";

const DiffHandicapLink = () => {
    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate('Les Différents Handicaps');
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.blocSalon}>
                    <Text style={styles.titleSalon}>Les différents handicaps</Text>
                    <Text style={styles.description}>A préciser pour commentaires et réclamations pour les handicaps.</Text>
                </View>         
            </TouchableOpacity>
             
        </View>
    )

}

export default DiffHandicapLink

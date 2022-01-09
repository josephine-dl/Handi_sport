import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./styles";

const PasseTempsLink = () => {
    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate('Vos Passe-temps');
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.blocSalon}>
                    <Text style={styles.titleSalon}>Vos passe-temps</Text>
                    <Text style={styles.description}>Vous souhaitez nous faire part de vos passions, de vos occupations ? Rendez-vous dans ce salon !</Text>
                </View>         
             </TouchableOpacity>
             
        </View>
    )

}

export default PasseTempsLink

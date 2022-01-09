import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./styles";

const ConseilsLink = () => {
    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate('Vos Conseils');
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.blocSalon}>
                    <Text style={styles.titleSalon}>Conseils</Text>
                    <Text style={styles.description}>Nous vous donnons rendez-vous dans ce salon pour partager certains conseils.</Text>
                </View>          
            </TouchableOpacity>
             
        </View>
    )

}

export default ConseilsLink

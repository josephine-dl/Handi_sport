import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./styles";

const ReglementLink = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Règlement')}>
                <View style={styles.blocSalon}>
                    <Text style={styles.titleSalon}>Règlement</Text>
                    <Text style={styles.description}>Vous trouverez dans ce salon les règles du forum.</Text>
                </View>           
             </TouchableOpacity>
             
        </View>
    )

}

export default ReglementLink


import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./styles"

const BienvenueLink = () => {
    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate('Bienvenue');
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.blocSalon}>
                    <Text style={styles.titleSalon}>Bienvenue !</Text>
                    <Text style={styles.description}>Ne soyez pas timide et venez donc vous présenter !</Text>
                </View>          
             </TouchableOpacity>
             
        </View>
    )

}

export default BienvenueLink

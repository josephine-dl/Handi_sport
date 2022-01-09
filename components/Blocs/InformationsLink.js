import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./styles";

const InformationsLink = () => {
    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate('Informations');
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.blocSalon}>
                    <Text style={styles.titleSalon}>Informations</Text>
                    <Text style={styles.description}>Ici vous pourrez trouver des annonces concernant le forum.</Text>
                </View>         
             </TouchableOpacity>
             
        </View>
    )

}

export default InformationsLink

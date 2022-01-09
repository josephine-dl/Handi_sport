import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./styles";

const CommLink = () => {
    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate('CommReclam');
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.blocSalon}>
                    <Text style={styles.titleSalon}>Commentaires et réclamations</Text>
                    <Text style={styles.description}>Si vous avez des idées ou des suggestions concernant le forum, venez nous en faire part ici !</Text>
                </View>         
             </TouchableOpacity>
        </View>
    )

}

export default CommLink
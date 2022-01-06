import React from "react";
import { StyleSheet } from "react-native";

import { View, Text } from "react-native";

const InfoScreen = () => {
    return (
        <View style={styles.container}>
            <Text>
                Bienvenue dans l'espace informations !
            </Text>
        </View>
    )
}
export default InfoScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})
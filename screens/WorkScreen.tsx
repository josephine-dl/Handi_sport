import React from "react";
import { StyleSheet } from "react-native";

import { View, Text } from "react-native";

const WorkScreen = () => {
    return (
        <View style={styles.container}>
            <Text>
                Bienvenue dans l'espace Emploi !
            </Text>
        </View>
    )
}
export default WorkScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
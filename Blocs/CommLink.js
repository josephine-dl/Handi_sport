import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

const CommLink = () => {
    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate('Commentaires et Réclamations');
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titleBloc: {
        fontSize: 20,
        width: '100%',
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10,
        borderColor: 'black',
        borderWidth: 3,
        borderRadius: 10
    },
    blocSalon:{
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 3,
        marginBottom: 10
    },
    titleSalon: {
        padding: 2,
        fontSize: 18,
        textAlign: 'left',
        fontWeight: 'bold',
        marginTop: 2
    },
    description: {
        padding: 2,
        fontSize: 16,
        justifyContent: 'space-evenly',
        marginBottom: 5
    }
})
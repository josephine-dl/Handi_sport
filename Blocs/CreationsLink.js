import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

const CreationLink = () => {
    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate('Vos Créations Personnelles');
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.blocSalon}>
                    <Text style={styles.titleSalon}>Vos créations personnelles</Text>
                    <Text style={styles.description}>Vous possédez des talents artistiques ? Venez donc les partager ici !</Text>
                </View>         
            </TouchableOpacity>
             
        </View>
    )

}

export default CreationLink

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
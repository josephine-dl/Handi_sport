import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

const ReglementLink = () => {
    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate('Règlement');
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.blocSalon}>
                    <Text style={styles.titleSalon}>Règlement</Text>
                    <Text style={styles.description}>Vous trouverez dans ce salon les règles du forum.</Text>
                </View>           
             </TouchableOpacity>
             
        </View>
    )

}

export default ReglementLink

/*

export default function ForumScreen() {
    return (
        <><ScrollView style={styles.container}>

            <Text style={styles.titleBloc}>LE FORUM</Text>
            <View style={styles.blocSalon}>
                 <Text style={styles.titleSalon}>Règlement</Text>
                 <Text style={styles.description}>Vous trouverez dans ce salon les règles du forum.</Text>
            </View>
            <View style={styles.blocSalon}>
                 <Text style={styles.titleSalon}>Bienvenue !</Text>
                 <Text style={styles.description}>Ne soyez pas timide et venez donc vous présenter !</Text>
            </View>
            <View style={styles.blocSalon}>
                 <Text style={styles.titleSalon}>Informations</Text>
                 <Text style={styles.description}>Ici vous pourrez trouver des annonces concernant le forum.</Text>
            </View>
            <View style={styles.blocSalon}>
                 <Text style={styles.titleSalon}>Commentaires et réclamations</Text>
                 <Text style={styles.description}>Si vous avez des idées ou des suggestions concernant le forum, venez nous en faire part ici !</Text>
            </View>

            <Text style={styles.titleBloc}>HANDICAP</Text>
            <View style={styles.blocSalon}>
                 <Text style={styles.titleSalon}>Les différents handicaps</Text>
                 <Text style={styles.description}>A préciser pour commentaires et réclamations pour les handicaps.</Text>
            </View>
            <View style={styles.blocSalon}>
                 <Text style={styles.titleSalon}>Vos expériences</Text>
                 <Text style={styles.description}>Venez partager avec nous vos expériences !</Text>
            </View>
            <View style={styles.blocSalon}>
                 <Text style={styles.titleSalon}>Conseils</Text>
                 <Text style={styles.description}>Nous vous donnons rendez-vous dans ce salon pour partager certains conseils.</Text>
            </View>

            <Text style={styles.titleBloc}>DIVERS</Text>
            <View style={styles.blocSalon}>
                 <Text style={styles.titleSalon}>Vos créations personnelles</Text>
                 <Text style={styles.description}>Vous possédez des talents artistiques ? Venez donc les partager ici !</Text>
            </View>
            <View style={styles.blocSalon}>
                 <Text style={styles.titleSalon}>Vos passe-temps</Text>
                 <Text style={styles.description}>Vous souhaitez nous faire part de vos passions, de vos occupations ? Rendez-vous dans ce salon !</Text>
            </View>
        </ScrollView>
        
        <View>
                <NewTopicButton />
            </View></>
    )
}
*/
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
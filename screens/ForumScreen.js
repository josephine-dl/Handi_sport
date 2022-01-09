import React from "react";
import { Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import BienvenueLink from "../components/Blocs/BienvenueLink";
import ReglementLink from "../components/Blocs/ReglementLink";
import InformationsLink from "../components/Blocs/InformationsLink";
import CommLink from "../components/Blocs/CommLink";
import DiffHandicapLink from "../components/Blocs/DiffHandicapLink";
import ExperiencesLink from "../components/Blocs/ExperiencesLink";
import ConseilsLink from "../components/Blocs/ConseilsLink";
import PasseTempsLink from "../components/Blocs/PasseTempsLink";
import CreationLink from "../components/Blocs/CreationsLink";

export default function ForumScreen() {
    return (
        <ScrollView style={styles.container}>

            <Text style={styles.titleBloc}>LE FORUM</Text>
            <ReglementLink/>
            <BienvenueLink/>
            <InformationsLink/>
            <CommLink/>

            <Text style={styles.titleBloc}>HANDICAP</Text>
            <DiffHandicapLink/>
            <ExperiencesLink/>
            <ConseilsLink/>

            <Text style={styles.titleBloc}>DIVERS</Text>
            <CreationLink/>
            <PasseTempsLink/>
            
        </ScrollView>
        
    )
}

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
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#00CCCB',
        color: 'white'
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
import React from "react";
import { View, Text } from "react-native";
import { NewTopicReglementButton } from "../../components/NewTopicButton/NewTopicReglement";
import { ScrollView } from "react-native-gesture-handler";

export default function ReglementScreen () {

    return(

        <><ScrollView style={{ flex: 1 }}>

            <Text>Ici s'afficheront les topics en rapport avec le règlement.</Text>
        </ScrollView>

        <View>
            <NewTopicReglementButton />
        </View></>
    )
}
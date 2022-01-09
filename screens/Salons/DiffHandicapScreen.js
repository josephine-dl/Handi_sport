import React from "react";
import { View, Text } from "react-native";
import { NewTopicHandicapsButton } from "../../components/NewTopicButton/NewTopicHandicapsButton";
import { ScrollView } from "react-native-gesture-handler";

export default function DiffHandicapScreen () {

    return(

    <><ScrollView style={{ flex: 1 }}>

        <Text>Ici s'afficheront les topics en rapport avec les différents types de handicap.</Text>
    </ScrollView>

    <View>
        <NewTopicHandicapsButton />
    </View></>
    )
}
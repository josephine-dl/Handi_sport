import React from "react";
import { View, Text } from "react-native";
import { NewTopicCreationButton } from "../../components/NewTopicButton/NewTopicCreationButton";
import { ScrollView } from "react-native-gesture-handler";

export default function CreationScreen () {

    return(

    <><ScrollView style={{ flex: 1 }}>

        <Text>Ici s'afficheront les topics en rapport avec vos créations.</Text>
    </ScrollView>

    <View>
        <NewTopicCreationButton />
    </View></>
    )
}
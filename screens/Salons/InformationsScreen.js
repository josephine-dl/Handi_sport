import React from "react";
import { View, Text } from "react-native";
import { NewTopicInformationsButton } from "../../components/NewTopicButton/NewTopicInformationsButton";
import { ScrollView } from "react-native-gesture-handler";

export default function InformationsScreen () {

    return(

        <><ScrollView style={{ flex: 1 }}>

            <Text>Ici s'afficheront les topics en rapport avec les informations.</Text>
        </ScrollView>

        <View>
            <NewTopicInformationsButton />
        </View></>
    )
}
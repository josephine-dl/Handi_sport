import React from "react";
import { View, Text } from "react-native";
import { NewTopicConseilsButton } from "../../components/NewTopicButton/NexTopicConseilsButton";
import { ScrollView } from "react-native-gesture-handler";

export default function ConseilsScreen () {

    return(

    <><ScrollView style={{ flex: 1 }}>

        <Text>Ici s'afficheront les topics en rapport avec vos conseils.</Text>
    </ScrollView>

    <View>
        <NewTopicConseilsButton />
    </View></>
    )
}
import React from "react";
import { View, Text } from "react-native";
import { NewTopicPasseButton } from "../../components/NewTopicButton/NewTopicPasseButton";
import { ScrollView } from "react-native-gesture-handler";

export default function PasseTempsScreen () {

    return(

        <><ScrollView style={{ flex: 1 }}>

            <Text>Ici s'afficheront les topics en rapport avec vos passe-temps.</Text>
        </ScrollView>

        <View>
            <NewTopicPasseButton />
        </View></>
    )
}
import React from "react";
import { View, Text } from "react-native";
import { NewTopicExperiencesButton } from "../../components/NewTopicButton/NewTopicExperiencesButton";
import { ScrollView } from "react-native-gesture-handler";

export default function ExperiencesScreen () {

    return(

        <><ScrollView style={{ flex: 1 }}>

            <Text>Ici s'afficheront les topics en rapport avec vos différentes expériences.</Text>
        </ScrollView>

<       View>
<           NewTopicExperiencesButton />
        </View></>
    )
}
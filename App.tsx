import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import ForumScreen from "./screens/ForumScreen";
import ReglementScreen from "./screens/Salons/ReglementScreen";
import ReglementLink from "./components/Blocs/ReglementLink";
import BienvenueLink from "./components/Blocs/BienvenueLink";
import BienvenueScreen from "./screens/Salons/BienvenueScreen";
import InformationsScreen from "./screens/Salons/InformationsScreen";
import InformationsLink from "./components/Blocs/InformationsLink";
import CommLink from "./components/Blocs/CommLink";
import CommScreen from "./screens/Salons/CommScreen";
import DiffHandicapScreen from "./screens/Salons/DiffHandicapScreen";
import DiffHandicapLink from "./components/Blocs/DiffHandicapLink";
import ExperiencesLink from "./components/Blocs/ExperiencesLink";
import ExperiencesScreen from "./screens/Salons/ExperiencesScreen";
import ConseilsLink from "./components/Blocs/ConseilsLink";
import ConseilsScreen from "./screens/Salons/ConseilsScreen";
import CreationScreen from "./screens/Salons/CreationsScreen";
import CreationLink from "./components/Blocs/CreationsLink";
import PasseTempsLink from "./components/Blocs/PasseTempsLink";
import PasseTempsScreen from "./screens/Salons/PasseTempsScreen";
import AddTopicReglementScreen from "./screens/AddTopics/AddTopicReglementScreen";
import AddTopicBienvenueScreen from "./screens/AddTopics/AddTopicBienvenueScreen";
import AddTopicCommScreen from "./screens/AddTopics/AddTopicCommScreen";
import AddTopicConseilsScreen from "./screens/AddTopics/AddTopicConseilsScreen";
import AddTopicCreationsScreen from "./screens/AddTopics/AddTopicCreationsScreen";
import AddTopicHandicapsScreen from "./screens/AddTopics/AddTopicHandicapsScreen";
import AddTopicExperiencesScreen from "./screens/AddTopics/AddTopicExperiencesScreen";
import AddTopicInformationsScreen from "./screens/AddTopics/AddTopicInformationsScreen";
import AddTopicPasseScreen from "./screens/AddTopics/AddTopicPasseScreen";

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

      <Stack.Screen name="Forum" component={ForumScreen} />

        <Stack.Screen name="PasseTempsLink" component={PasseTempsLink} />

        <Stack.Screen name="CreationsLink" component={CreationLink} />
        <Stack.Screen name="ConseilsLink" component={ConseilsLink} />
        <Stack.Screen name="ExperiencesLink" component={ExperiencesLink} />
        <Stack.Screen name="DiffHandicapLink" component={DiffHandicapLink} />
        <Stack.Screen name="CommLink" component={CommLink} />
        <Stack.Screen name="InformationsLink" component={InformationsLink} />
        <Stack.Screen name="BienvenueLink" component={BienvenueLink} />
        <Stack.Screen name="RèglementLink" component={ReglementLink} />
        <Stack.Screen name="Add Topic Règlement" component={AddTopicReglementScreen} />
        <Stack.Screen name="Add Topic Bienvenue" component={AddTopicBienvenueScreen} />
        <Stack.Screen name="Add Topic Commentaires et Réclamations" component={AddTopicCommScreen} />
        <Stack.Screen name="Add Topic Conseils" component={AddTopicConseilsScreen} />
        <Stack.Screen name="Add Topic Créations" component={AddTopicCreationsScreen} />
        <Stack.Screen name="Add Topic Handicaps" component={AddTopicHandicapsScreen} />
        <Stack.Screen name="Add Topic Expériences" component={AddTopicExperiencesScreen} />
        <Stack.Screen name="Add Topic Informations" component={AddTopicInformationsScreen} />
        <Stack.Screen name="Add Topic Passe-temps" component={AddTopicPasseScreen} />
        <Stack.Screen name="Règlement" component={ReglementScreen} />
        <Stack.Screen name="Bienvenue" component={BienvenueScreen} />
        <Stack.Screen name="Informations" component={InformationsScreen} />
        <Stack.Screen name="Commentaires et Réclamations" component={CommScreen} />
        <Stack.Screen name="Les Différents Handicaps" component={DiffHandicapScreen} />
        <Stack.Screen name="Vos expériences" component={ExperiencesScreen} />
        <Stack.Screen name="Vos Conseils" component={ConseilsScreen} />
        <Stack.Screen name="Vos Créations Personnelles" component={CreationScreen} />
        <Stack.Screen name="Vos Passe-temps" component={PasseTempsScreen} />
        








      </Stack.Navigator>
    </NavigationContainer>
  );
}
/*

<Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
        */
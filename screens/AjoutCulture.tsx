import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Text, Pressable, View, ScrollView, FlatList} from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { useState } from 'react';
import Navigation from '../navigation';
import { SafeAreaView} from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Input, Button } from 'react-native-elements';
import { dismissBrowser } from 'expo-web-browser';
import { db } from '../Setup';

const AjoutCulture = () => {

   
    const [nom, setNom] = useState (""); 
    const [lieu, setLieu] = useState (""); 
    const [prix, setPrix] = useState (""); 
    const [description, setDesciption] = useState (""); 
    const [site, setSite] = useState (""); 
    const [handicap, setHandicap] = useState (""); 
    /*const ClickHandler = () => {
        setName ('coco') ;
    } */

    const navigation = useNavigation();

    const AjoutDoc =() => {
        db.collection("Culture").add({
            nom, 
            lieu, 
            prix, 
            description, 
            handicap, 
            site
        })

        //navigation.navigate("Culture")
    }


    return (

        <ScrollView style={styles.container}>
           <Text style={styles.titre}>
               Voici le formulaire pour rentrer un lieu culturel : 

           </Text>
                <Input 
                        placeholder = "entrer le nom"
                        label = "nom"
                        value = {nom}
                        onChangeText = {text => setNom(text)}
                /> 

                <Input 
                        placeholder = "entrer le lieu"
                        label = "lieu"
                        value = {lieu}
                        onChangeText = {text => setLieu(text)}
                /> 

                <Input 
                        placeholder = "entrer le prix"
                        label = "prix"
                        value = {prix}
                        onChangeText = {text => setPrix(text)}
                /> 

                <Input 
                        placeholder = "entrer la description du lieu"
                        label = "description"
                        value = {description}
                        onChangeText = {text => setDesciption(text)}
                /> 

                <Input 
                        placeholder = "entrer le type de handicap accepté"
                        label = "handicap"
                        value = {handicap}
                        onChangeText = {text => setHandicap(text)}
                /> 

                <Input 
                        placeholder = "entrer l'url du site"
                        label = "site"
                        value = {site}
                        onChangeText = {text => setSite(text)}
                /> 
                <Button title = "Valider" style = {styles.bouton} 
                    onPress={ AjoutDoc}
                />

        </ScrollView>
    )
}

export default AjoutCulture;



const styles = StyleSheet.create({
    container: {
      flex: 1,
      //alignItems: 'center',
      //justifyContent: 'center',
    },


    titre: {
        margin : 5,
        fontSize: 20,
        textAlign : 'center', 
        fontWeight: 'bold',
        color: '#00CCCB',
      },

    bouton: {
        color: '#00CCCB',
        width: Dimensions.get('screen').width - 20, /* va prendre la largeur de l'écran - les brodures gauches et droites */
        height: 60,
        borderRadius: 30, /*doit être la moitié de la hauteur  */
        marginHorizontal: 10,  /* margin left et right*/
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: "relative",
    },
  });

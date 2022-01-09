import React, {useState} from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, TextInput, FlatList, ScrollView} from 'react-native';
import 'react-native-gesture-handler' ; 
import { Button, Input } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { db } from '../Setup';
import { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Dimensions } from 'react-native';
import Linking from '../navigation/LinkingConfiguration';
const CultureScreen = () => {

  const navigation = useNavigation();

  const [activitys, setActivitys] = useState([]) ; 


  // fct qui récupère les docs et les mets dans activitys 
  useEffect(() => {    
    return db.collection("Culture").orderBy('nom', 'desc').onSnapshot(querySnapshot => {      
      const list = [];      
      querySnapshot.forEach(doc => {
        const { nom, lieu, prix, description, site, handicap } = doc.data();        
        list.push({          
          id: doc.id,
          description,
          lieu, 
          nom,
          prix, 
          handicap, 
          site,      
        }); 
      });
      setActivitys(list); 
      //console.log(activitys[0].id)  
    });  
  }, []);

  /*const RecupDocs =() => {
    db.collection("Culture").orderBy('nom', 'desc').onSnapshot(snapshot => setActivitys(
      snapshot.docs.map(doc => ({
        key: doc.key,
        nom: doc.data().nom, 
        lieu: doc.data().lieu, 
        prix: doc.data().prix, 
        description: doc.data().description, 
        site: doc.data().site, 
      }))
    ))*/
  

  return (

      <SafeAreaView style={styles.container}>
         
         
         <Button title = "+" style={styles.button } 
          onPress = {()=> navigation.navigate("AjoutCulture") }
         />
    
        { <FlatList
                style={styles.flatlist}
                data = {activitys}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => 

                  <View style={styles.main_container}>

                      <Text style={styles.nom}>
                        {item.nom}
                      </Text>

                      <Text style={styles.adresse}>
                        Adresse: {item.lieu}
                      </Text>

                      <Text style={styles.prix}>
                      Prix : {item.prix} €
                      </Text>

                      <Text style={styles.description}>
                      {item.description}
                      </Text>

                      <Text style={styles.handicap}>
                      Type de handicap accepté : {item.handicap}
                      </Text>

                      <Text style={styles.hyperlinkStyle, {color: '#00CCCB'}} onPress={() => {
                            Linking.openURL(item.site);
                          }}>
                            {item.site}
                      </Text>
                    
                  </View>
                }
        />}
  
      </SafeAreaView>
    
  )
}

export default CultureScreen;



const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      margin : 20, 
    },
    Titre: {
        color: '#00CCCB',
        fontSize : 30, 
    },

    button: {
      color: '#00CCCB',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      //backgroundColor: 'black',
    },

  FlatList: {
    margin : 5,
  },
  
  content_container: {
    flex: 1,
    margin: 5
  },


  main_container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff', 
    //width: Dimensions.get('screen').width - 20, //va prendre la largeur de l'écran - les brodures gauches et droites 
    borderRadius: 10, //doit être la moitié de la hauteur  
    flexDirection: 'column', 
    alignItems: 'center',
    position : "relative", 
    zIndex: 100,
    borderColor: '#00CCCB',
    borderWidth: 2,
    marginHorizontal: 2,
    marginVertical: 10,
    padding: 10,
  },

    nom: {
      fontSize: 18,
      textAlign : 'center',
      fontWeight: 'bold',
      margin : 2,
      flex: 1,
      flexWrap: 'wrap',
      paddingRight: 5,
      marginBottom:-4
    }, 

    adresse : {
      fontSize: 13,
      textAlign : 'center',
      fontWeight: 'bold',
      margin : 2,
      flex: 1,
      flexWrap: 'wrap',
      paddingRight: 5,
      marginBottom:-4, 
      color : 'black', 
    }, 

    prix: {
      fontSize: 13,
      textAlign : 'left',
      margin : 1,
      color : '#5b5b5b' ,
    },

    description: {
      fontSize: 13,
      color : '#5b5b5b' ,
      textAlign : 'left',
      margin : 3,
    },

    handicap: {
      fontSize: 13,
      color : '#5b5b5b' ,
      textAlign : 'left',
      margin : 3,
    },
    
  });
import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Text, Pressable, View, ScrollView, FlatList} from 'react-native';
import { useState } from 'react';
import { SafeAreaView} from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Input, Button } from 'react-native-elements';
import { db } from '../Setup';
import { Modal } from 'react-native'; 
import { MaterialIcons } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { TextInput } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native-gesture-handler';

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

    const [modalVisible, setModalVisible] = useState(false);


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

        setModalVisible(true) ; 

        //navigation.navigate("Culture")
    }


    return (

      
        <KeyboardAwareScrollView style={{backgroundColor: '#FFF'}}>

          <View style ={{flex: 1, padding: 5, alignItems: 'center', backgroundColor: '#FFF'}}>

            <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 30, marginBottom: 20}}> Formulaire des lieux cultrels : </Text>

            <View>
              <MaterialIcons name={'person-outline'} size={28} color='#00CCCB' style ={{position: 'absolute', top: 16, left: 18, color: '#B22222'}}/>
              <TextInput style={{borderWidth: 1, borderColor: '#00CCCB', borderRadius: 10, padding: 8, margin: 10, paddingLeft: 45, width: 350}}
              placeholder="Nom" value = {nom} onChangeText={text => setNom(text)}/>
            </View>
            
            <View>
              <MaterialIcons name={'room'} size={28} color='#00CCCB' style ={{position: 'absolute', top: 16, left: 18, color: '#B22222'}}/>
              <TextInput style={{borderWidth: 1, borderColor: '#00CCCB', borderRadius: 10, padding: 8, margin: 10, width: 350, paddingLeft: 45}}
              placeholder = "Lieu" value = {lieu} onChangeText = {text => setLieu(text)}/>
            </View>
            
            <View>
              <MaterialIcons name={'euro'} size={28} color='#00CCCB' style ={{position: 'absolute', top: 16, left: 18, color: '#B22222'}}/>
              <TextInput style={{borderWidth: 1, borderColor: '#00CCCB', borderRadius: 10, padding: 8, margin: 10, width: 350, paddingLeft: 45}}
              placeholder = "Prix" value = {prix} onChangeText = {text => setPrix(text)}/>
            </View>

            <View>
              <MaterialIcons name={'help-outline'} size={28} color='#00CCCB' style ={{position: 'absolute', top: 16, left: 18, color: '#B22222'}}/>
              <TextInput style={{borderWidth: 1, borderColor: '#00CCCB', borderRadius: 10, padding: 8, margin: 10, width: 350, paddingLeft: 45}}
              placeholder = "Description du lieu" value = {description} onChangeText = {text => setDesciption(text)} />
            </View>
                  
            <View>
              <MaterialIcons name={'accessible'} size={28} color='#00CCCB' style ={{position: 'absolute', top: 16, left: 18, color: '#B22222'}}/>
              <TextInput style={{borderWidth: 1, borderColor: '#00CCCB', borderRadius: 10, padding: 8, margin: 10, width: 350, paddingLeft: 45}}
              placeholder = "Type de handicap accepté" value = {handicap} onChangeText = {text => setHandicap(text)} />
            </View>


            <View>
              <MaterialIcons name={'link'} size={28} color='#00CCCB' style ={{position: 'absolute', top: 16, left: 18, color: '#B22222'}}/>
              <TextInput style={{borderWidth: 1, borderColor: '#00CCCB', borderRadius: 10, padding: 8, margin: 10, width: 350, paddingLeft: 45, marginBottom: 25}}
              placeholder="Url du site" value = {site} onChangeText = {text => setSite(text)}/>
            </View>

              <TouchableOpacity onPress= {AjoutDoc}
                style={{backgroundColor: '#00CCCB', padding: 10, width: 250, borderRadius: 30, marginHorizontal: 2}}>
                <Text style={{textAlign: 'center', color: '#FFF', fontSize: 18, fontWeight: 'bold'}}>Valider</Text>
              </TouchableOpacity>

          </View>
          <Modal 
                      animationType="slide"
                      transparent={true} 
                      visible={modalVisible}>
                          <View style={styles.centeredView}>
                                    <View style={styles.modalView}>
                                          <Text style={styles.modalText}>Lieu culturel ajouté !</Text>
                                                  <Button style={styles.button} title='Fermer'onPress={()=>{setModalVisible(false)}}/>
                                              </View>
                                          </View>
                                      </Modal>

        </KeyboardAwareScrollView>

    )
}

export default AjoutCulture;




const styles = StyleSheet.create({
    container: {
      flex: 1,
      //alignItems: 'center',
      //justifyContent: 'center',
    },

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2, 
        backgroundColor: '#00CCCB',
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }, 
/*
    titre: {
        margin : 5,
        fontSize: 20,
        textAlign : 'center', 
        fontWeight: 'bold',
        color: '#00CCCB',
      },

    bouton: {
        color: '#00CCCB',
        width: Dimensions.get('screen').width - 20, // va prendre la largeur de l'écran - les brodures gauches et droites 
        height: 60,
        borderRadius: 30, // doit être la moitié de la hauteur  
        marginHorizontal: 10,  //margin left et right
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: "relative",
    },*/
  });
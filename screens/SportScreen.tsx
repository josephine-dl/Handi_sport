import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, Image, Linking, ScrollView, Button, Modal} from 'react-native';
import {ListItem, SearchBar} from 'react-native-elements';
import filter from "lodash.filter";
import {Ionicons} from '@expo/vector-icons'
import Icon from 'react-native-vector-icons/Ionicons';
import {auth, firebase, database} from '../Setup'

export default class SportScreen extends React.Component{

  constructor(){
    super();
    this.state={
      list:[],
      dataBackup:[],
      query : null,
      show:false
    };
  }

  componentDidMount(){
    firebase.database().ref('/Utilisateurs/Associations/-- Informations --').on('value', (snapshot) =>{
      var li = []
      snapshot.forEach((child) =>{
        li.push({
          key: child.key,
          nomAssociation: child.val().nomAssociation,
          telephone: child.val().telephone,
          activite: child.val().activite,
          typeHandicap: child.val().typeHandicap,
          ville: child.val().ville,
          tarifs: child.val().tarifs,
          trancheAge: child.val().trancheAge,
          horairesEntrainement: child.val().horairesEntrainement,
          documents: child.val().documents,
          autres: child.val().autres,
        })
      })
      this.setState({
        list : li,
        dataBackup: li
      })
    })
  }


  filterItem = event => {
    var query = event.nativeEvent.text;
    this.setState({
      query : query,
    });

    if(query == ""){
      this.setState({
        list: this.state.dataBackup
      })
    }

    else{
      var data = this.state.dataBackup;
      query = query.toLowerCase();
      data = data.filter(l => l.activite.toLowerCase().match(query));

      this.setState({
        list: data,
      });

    }
  };

  render() {

    return (

        <View >
            <ScrollView>

            <SearchBar placeholder="Rechercher par sport ..." lightTheme round
            value ={this.state.query} onChange={this.filterItem.bind(this)}/>

            <FlatList
              data={this.state.list}
              keyExtractor = {(item) => item.key}
              renderItem={({item}) => {

                return(

                  <View style={styles.main_container}>

                    <View style={styles.content_container}>

                      <View style={styles.header_container}>
                        <Text style={styles.title}>{item.nomAssociation}</Text>
                      </View>

                      <View style={styles.header_container}>
                        <Text style={styles.title_text}>Activité : {item.activite}</Text>
                      </View>

                      <View style={styles.header_container}>
                        <Text style={styles.title_text}>Type d'handicap : {item.typeHandicap}</Text>
                      </View>

                      <View style={styles.header_container}>
                        <Text style={styles.title_text}>Localisation : {item.ville}</Text>
                      </View>

                      <Button title='En savoir plus' onPress={()=>{this.setState({show:true})}}/>
                            <Modal transparent={true} visible={this.state.show}>
                                  <View style={{backgroundColor:"#000000aa", flex:1}}>
                                      <View style={{backgroundColor:"#ffffff", margin:30, padding :40, borderRadius:10, flex:1}}>
                                        <Text style={{fontSize:20, marginBottom: 20}}>{item.nomAssociation}</Text>
                                                <View style={{flex: 1}}>
                                                  <Text style={{fontWeight: 'bold', marginBottom: 1}}>Tranche d'âge</Text>
                                                  <Text style={{marginTop: 5, marginBottom: 15}}>{item.trancheAge}</Text>

                                                  <Text style={{fontWeight: 'bold', marginBottom: 1}}>Tarifs</Text>
                                                  <Text style={{marginTop: 5, marginBottom: 15}}>{item.tarifs}</Text>

                                                  <Text style={{fontWeight: 'bold', marginBottom: 1}}>Horaires d'entraînement</Text>
                                                  <Text style={{marginTop: 5, marginBottom: 15}}>{item.horairesEntrainement}</Text>

                                                  <Text style={{fontWeight: 'bold', marginBottom: 1}}>Documents à fournir pour l'inscription</Text>
                                                  <Text style={{marginTop: 5, marginBottom: 15}}>{item.documents}</Text>

                                                  <Text style={{fontWeight: 'bold', marginBottom: 1}}>Téléphone</Text>
                                                  <Text style={{marginTop: 5, marginBottom: 15}}>{item.telephone}</Text>

                                                  <Text style={{fontWeight: 'bold', marginBottom: 1}}>Informations complémentaires</Text>
                                                  <Text style={{marginTop: 5, marginBottom: 15}}>{item.autres}</Text>

                                                </View>

                                                <Button title='Fermer'onPress={()=>{this.setState({show:false})}}/>
                                            </View>
                                        </View>
                              </Modal>

                    </View>
                </View>

              )}}/>

              </ScrollView>

              </View>
          )}
}



const styles = StyleSheet.create({

      main_container: {
        height: 170,
        flexDirection: 'row',
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 10,
        borderColor: '#00CCCB',
        borderWidth: 2,
        padding: 10,

      },
      content_container: {
        flex: 1,
        margin: 5
      },

      header_container: {
        flex: 3.3,
        flexDirection: 'row',

      },

      title_text: {
        fontSize: 14,
        flex: 1,
        flexWrap: 'wrap',
        paddingRight: 5,
        marginBottom:-4
      },

      title: {
        fontWeight: 'bold',
        fontSize: 14,
        flex: 1,
        flexWrap: 'wrap',
        paddingRight: 5,
        marginBottom:3
      },
      description_container: {
        flex: 3
      }


})

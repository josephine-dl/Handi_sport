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
          activite: child.val().activite,
          typeHandicap: child.val().typeHandicap,
          ville: child.val().ville,
          imageURL: child.val().imageURL,
          telephone: child.val().telephone,
          lien: child.val().lien
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
    const {todo} = this.state

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

                  <Image
                    style={styles.image}
                    source={{uri: item.imageURL}}
                  />

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

                      <View style={styles.header_container}>
                        <Text style={styles.title_text}>Téléphone : {item.telephone}</Text>
                      </View>

                      <Text style={styles.hyperlinkStyle, {color: '#00CCCB'}} onPress={() => {
                        Linking.openURL(item.lien);
                      }}>
                      En savoir +
                      </Text>

                    </View>

                  </View>)

              }}/>

              </ScrollView>

          </View>

      )}

}

const styles = StyleSheet.create({

      main_container: {
        height: 250,
        flexDirection: 'row',
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 10,
        borderColor: '#00CCCB',
        borderWidth: 2,
        padding: 10,

      },

      image: {
        width: 131,
        height: 207,
        marginLeft: -3.5,
        marginRight: 11,
        margin: 5,

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

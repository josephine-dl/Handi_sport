
import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, Image, Linking, ScrollView} from 'react-native';
import {ListItem, SearchBar} from 'react-native-elements';
import filter from "lodash.filter";
import {Ionicons} from '@expo/vector-icons'
import SearchComponent from '../components/SearchComponent'
import Icon from 'react-native-vector-icons/Ionicons';
import {auth, firebase, database} from '../Setup'

const Item = ({localisation}) => {
  return(
    <View style ={styles.item}>
      <Text>{localisation}</Text>
    </View>
  );
};

const RI = ({item}) => <Item localisation = {item.localisation} />;

export default class WorkScreen extends React.Component{

  constructor(props){
    super(props);
    this.state={
      list:[],
      loading: false,
      error: null,
      searchedValue: "",
    };
    this.arrayholder = this.state.list;
  }

  componentDidMount(){
    firebase.database().ref('/Utilisateurs/Entreprises/-- Les offres --').on('value', (snapshot) =>{
      var li = []
      snapshot.forEach((child) =>{
        li.push({
          key: child.key,
          datePublication: child.val().datePublication,
          entreprise: child.val().entreprise,
          imageURL: child.val().imageURL,
          intitule: child.val().intitule,
          lien: child.val().lien,
          localisation: child.val().localisation,
          niveauDeFormation: child.val().niveauDeFormation,
          salaire: child.val().salaire,
          typeDeContrat: child.val().typeDeContrat
        })
      })
      this.setState({list : li})
    })
  }

  searchFunction = (text) => {
    const updatedData = this.arrayholder.filter((item) => {
      const item_data = '${item.localisation.toUpperCase()})';
      const text_data = text.toUpperCase();
      return item_data.indexOf(text_data) > -1;
    });
    this.setState({data: updatedData, searchedValue: text});
  };

  render() {

    return (

        <View >
             <ScrollView>

              <SearchBar
                placeholder="Search here ..."
                lightTheme
                round
                value = {this.state.searchedValue}
                onChangeText = {(text) => this.searchFunction(text)}
                autoCorrect = {false}
              />

            <FlatList
              data={this.state.list}
              keyExtractor = {(item) => item.key}
              RI = {RI}
              renderItem={({item}) => {
                return(

                  <View style={styles.main_container}>
                    <Image
                      style={styles.image}
                      source={{uri: item.imageURL}}
                    />

                    <View style={styles.content_container}>

                      <View style={styles.header_container}>
                        <Text style={styles.title_text}>{item.intitule}</Text>
                      </View>

                      <View style={styles.header_container}>
                        <Text style={styles.title_text}>{item.entreprise}</Text>
                      </View>

                      <View>
                        <Text style={{color: '#000000'}} numberOfLines={6}>{item.niveauDeFormation}</Text>
                      </View>

                      <View>
                        <Text style={styles.description_text}>{item.salaire}</Text>
                      </View>

                      <View>
                        <Text style={styles.description_text}>{item.typeDeContrat} - {item.localisation}</Text>
                      </View>

                      <View style={styles.description_container}>
                        <Text style={styles.description_container}>Publiée le {item.datePublication}</Text>
                      </View>

                      <Text style={styles.hyperlinkStyle, {color: '#00CCCB'}} onPress={() => {
                        Linking.openURL(item.lien);
                      }}>
                      + d'infos pour postuler
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
        height: 190,
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
        height: 67,
        marginLeft: -3.5,
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
        fontWeight: 'bold',
        fontSize: 14,
        flex: 1,
        flexWrap: 'wrap',
        paddingRight: 5
      },
      description_container: {
        flex: 3
      },
      description_text: {
        color: '#666666'
      },
      date_container: {
        flex: 1
      },
      date_text: {
        textAlign: 'right',
        fontSize: 11
      }

})

import React from 'react';
import { StyleSheet, Dimensions, Button } from 'react-native';
import { Text, Pressable, View, ScrollView, FlatList, Image,  Linking} from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import Post from '../components/Post/index';
import { useState } from 'react';
import feed from '../assets/data/feed'  ;
import Navigation from '../navigation';
import { SafeAreaView} from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import {ListItem, SearchBar} from 'react-native-elements';

export default class InfoScreen extends React.Component{

    constructor(){
      super();
      this.state={
        query: null,
        dataSource: [],
        dataBackup: []
      };
    }

    componentDidMount(){

      var data = [
          {
              titre: "1er janvier 2022 : ce qui change en cas de handicap ",
              resume: "Comme chaque année de nouvelles mesures entrent en vigueur au 1er janvier. Tour d'horizon de quelques changements à retenir, applicables dès le premier jour de 2022 dans le champs du handicap",
              paratexte: "21/12/2021 par Handicap.fr / E.Dal'Secco",
              image: "https://www.handicap.fr/static/contenu/img3/1er-janvier-2022-ce-qui-change-en-cas-de-handicap-32099.jpg",
              lien: "https://informations.handicap.fr/a-janvier-2022-change-cas-handicap-32099.php1"
          },

          {
              titre: "Le gouvernement poursuit sa mobilisation pour accélérer le développement de la pratique sportive des personnes en situation de handicap",
              resume: "A l'occasion de la Journée internationale des Personnes Handicapées, Roxana Maracineanu, ministre déléguée chargée des Sports et Sophie Cluzel, secrétaire d'Etat auprès du Premier ministre chargée des personnes handicapées, officialisent deux mesures visant à facilité la pratique du sport pour les personnes en situation de handicap.",
              paratexte: "03/12/21 par handicap.gouv.fr",
              image: "https://handicap.gouv.fr/sites/handicap/files/2021-12/logo-handiguide-pass-sports.png",
              lien: "https://handicap.gouv.fr/le-gouvernement-poursuit-sa-mobilisation-pour-accelerer-le-developpement-de-la-pratique-sportive"
          },

          {
              titre: "Emploi et handicap : les salariés hors normes de la société Biscornu",
              resume: "Dans les Hauts-de-Seine, l'association Afuté et l'entreprise adaptée Biscornu apporte formation aux métiers de la restauration et travail à des jeunes en situation de handicap. Reportage, à l'occasion de la Semaine européenne pour l'emploi des personnes handicapées. ",
              paratexte: "15/11/21 par José-Alain Fralon",
              image: "https://img.lemde.fr/2021/11/12/606/0/4843/2421/1440/720/75/0/1d11bf5_940372702-biscornu019.jpg",
              lien:"https://www.lemonde.fr/emploi/article/2021/11/15/emploi-et-handicap-les-salaries-hors-normes-de-la-societe-biscornu_6102091_1698637.html"
          }

      ]

      this.setState({
        dataBackup: data,
        dataSource: data
      })

    }


    filterItem = (event) => {
      var query = event.nativeEvent.text;
      this.setState({
        query: query
      });

       if (query == ""){
         this.setState({
           dataSource: this.state.dataBackup
         })
       }
       else{
         var data = this.state.dataBackup;
         query = query.toLowerCase();
         data = data.filter(l => l.titre.toLowerCase().match(query));

         this.setState({
           dataSource: data,
         });
       }

    };

    render(){

    return (

        <View>
          <ScrollView>

          <SearchBar placeholder="Rechercher par mots clés ..." lightTheme round value={this.state.query} onChange={this.filterItem.bind(this)}/>

           <FlatList
                style={styles.flatlist}
                data = {this.state.dataSource}
                renderItem = {({item, index})=>{
                  return(
                      <View style= {{backgroundColor: '#fff',
                        borderRadius: 30,
                        marginHorizontal: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop : 10,
                        zIndex: 100}} >

                        <Text style={styles.titre}>
                          {item.titre}
                        </Text>

                        <Text style={styles.resume}>
                          {item.resume}
                        </Text>

                        <Image
                            style={styles.image}
                            source={{uri: item.image}}
                        />

                        <Text style={styles.paratexte}>
                           {item.paratexte}
                        </Text>

                        <Text style={styles.hyperlinkStyle, {color: '#00CCCB'}} onPress={() => {
                          Linking.openURL(item.lien);
                        }}>
                        Voir l'article en ligne
                        </Text>


                      </View>

                  )

                }}
            />

            </ScrollView>
          </View>

    )}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:15,
    justifyContent: 'center',
    backgroundColor: '#fff',
    width: Dimensions.get('screen').width - 20,
    borderRadius: 30,
    marginHorizontal: 10,
    flexDirection: 'column',
    alignItems: 'center',
    position : "relative",
    marginTop : 10,
    zIndex: 100,
  },

    titre: {
      fontSize: 20,
      textAlign : 'center',
      fontWeight: 'bold',
      margin : 1,
    },

    resume: {
      fontSize: 18,
      textAlign : 'left',
      margin : 1,
      textAlign: 'justify',
      marginTop:10,
      marginBottom: 10
    },

    paratexte: {
      fontSize: 14,
      color : '#5b5b5b' ,
      textAlign : 'left',
      margin : 1,
    },

    image: {
      width: '100%',
      aspectRatio: 3/2,
      resizeMode:'cover',
      margin : 1,
    },
  });

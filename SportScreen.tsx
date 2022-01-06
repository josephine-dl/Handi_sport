import { StyleSheet, Pressable, View, Modal, Text, Button,TextInput, FlatList, Image, Linking, ScrollView } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { SafeAreaFrameContext } from 'react-native-safe-area-context';
import React, {Component} from 'react';
import {ListItem, SearchBar} from 'react-native-elements';
import filter from "lodash.filter";
import {Ionicons} from '@expo/vector-icons'
import SearchComponent from '../components/SearchComponent'
import Icon from 'react-native-vector-icons/Ionicons';
import {auth, firebase, database} from '../Setup'
import index from '../navigation/index'

class App extends React.Component {

    constructor()
    {
        super();
        this.state={
            show:false,
            list:[],
            dataBackup:[],
            query : null
        }
    }

    componentDidMount(){
        firebase.database().ref('/Utilisateurs/Associations').on('value', (snapshot) =>{
            var li = []
            snapshot.forEach((child) =>{
                li.push({
                    nom: child.val().nom,
                    imageURL: child.val().imageURL,
                    Ville: child.val().Ville,
                })
            })
            this.setState({
                list : li,
                dataBackup: li
            })
        })
    };


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
          data = data.filter(l => l.intitule.toLowerCase().match(query));
    
          this.setState({
            list: data,
          });
    
        }
    };



    render() {

        return (

            <View >
                <ScrollView>
                <SearchBar placeholder="Rechercher par associations" lightTheme round
                value ={this.state.query} onChange={this.filterItem.bind(this)}/>
    
                <FlatList
                    data={this.state.list}
                    keyExtractor = {(item) => item.key}
                    renderItem={({item}) => {

                        return (
                            <View style={styles.main_container}>

                                <View style={styles.content_container}>

                                    <View style={styles.header_container}>
                                        <Text style={styles.title_text}>{item.nom}</Text>
                                    </View>

                                    <View style={styles.header_container}>
                                        <Text style={styles.description_text}>{item.Ville}</Text>
                                    </View>

                                    <Button title='En savaoir plus'onPress={()=>{this.setState({show:true})}}/>
                                    <Modal transparent={true} visible={this.state.show}>
                                        <View style={{backgroundColor:"#000000aa", flex:1}}>
                                            <View style={{backgroundColor:"#ffffff", margin:30, padding :40, borderRadius:10, flex:1}}>
                                                <Text style={{ fontSize:20}}>{item.nom}</Text>
                                                <View style={styles.header_container}>
                                                    <Text style={styles.description_text}>{item.description}</Text>
                                                </View>
                                                <Button title='Fermer'onPress={()=>{this.setState({show:false})}}/>
                                            </View>
                                        </View>
                                    </Modal>
                                </View>
                            </View>
                        )
                    }}
                />
            </ScrollView></View>
        )
    }           
}

export default App;


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
        fontWeight: 'bold',
        fontSize: 14,
        flex: 1,
        flexWrap: 'wrap',
        paddingRight: 5,
        marginBottom:-4
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

   
});
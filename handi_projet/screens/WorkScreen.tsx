import React from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, Image} from 'react-native';
import {Ionicons} from '@expo/vector-icons'
import jobs from '../helpers/jobData'
import JobItem from '../components/JobItem'

export default class WorkScreen extends React.Component{

    state = {
      work: []
    }

    onChangeText(text){
      console.log('textChanged', text)

    }

    render(){

      return(
        <View style={styles.main_view}>

            <View style={styles.header}>
                <Text style={styles.text}>Bienvenue dans l'espace Emploi !</Text>
            </View>

            <View>
              <TextInput
                placeholder="Search"
                style={styles.search_bar}
                onChangeText={text => this.onChangeText(text)}
              />
              <Ionicons style={styles.icon_search}
                  name="ios-search"
                  size={20}
                  color="#ddd"
              />
            </View>

            <FlatList
              data={jobs}
              keyExtractor = {(item, index) => 'key' + index}
              renderItem={({item}) => <JobItem job={item}/>}
            />

        </View>

      )}
}

const styles = StyleSheet.create({
    main_view :{
        flex: 1
    },

    header: {
      borderBottomWidth: 1,
      borderColor: '#ddd',
      alignItems: 'center',
      justifyContent: 'center',
      height: 100
    },

    text: {
      marginTop: 10,
      fontSize: 16,
      fontWeight: 'bold'
    },

    search_bar: {
      margin: 15,
      padding: 7,
      paddingLeft: 30,
      borderWidth: 2,
      borderColor: '#ddd',
      borderRadius: 10,
      fontSize: 16
    },

    icon_search:{
      position: 'absolute',
      left: 20,
      top: 25
    },

    job_offer: {
      alignItems: 'center',
      justifyContent: 'center',

    }
})

/*const WorkScreen = () => {

    return (
        <View style={styles.container}>
            <Text>
                Bienvenue dans l'espace Emploi !!
            </Text>
        </View>
    )
}*/

/*export default WorkScreen;*/

/*const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
*/

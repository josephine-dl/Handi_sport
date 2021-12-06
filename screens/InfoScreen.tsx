import React from 'react';
import { StyleSheet, Dimensions, Button } from 'react-native';
import { Text, Pressable, View, ScrollView} from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import Post from '../components/Post/index';
import { useState } from 'react';
import feed from '../assets/data/feed'  ; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from '../navigation';
import { SafeAreaView} from 'react-native-safe-area-context';
// import ArticleScreen from 'ArticleScreen';
// import StickyHeader from 'react-native-stickyheader';
const InfoScreen = () => {
    
    const [name, setName] = useState('chloé') ; 
    const[person, setPerson] =useState ({name:'mario', age:40})  ; 

    /*const ClickHandler = () => {
        setName ('coco') ; 
    } */

    const datalog = () => {
        console.warn('info_select btn clicked') ; 
    }

    // les constantes contenant les infos des articles 
    const post1 = feed[0]; 
    const post2 = feed[1]; 
    const post3 = feed[2]; 

    // const Stack = createNativeStackNavigator() ; 

    return (
        
        <SafeAreaView style={styles.container}>
           
            <Pressable
                    style={styles.searchButton}
                    onPress={datalog} // log pour appli 
                >
                    <Fontisto name="search" size={25} color={"pink"} /> 

                    <Text style={styles.searchButtonText}>Informations_choisis</Text>

            </Pressable>

            <ScrollView style = {styles.scrollView}> 
                <Text>
                       
                </Text>

                <Pressable
                    style={styles.post}
                    onPress={datalog} // log pour appli 
                >
                    <Post post = {post1}/>
                </Pressable>
                
                <Pressable
                    style={styles.post}
                    onPress={datalog} // log pour appli 
                >
                    <Post post = {post2}/> 
                </Pressable>

                <Pressable
                    style={styles.post}
                    onPress={datalog} // log pour appli 
                >
                    <Post post = {post3}/> 
                </Pressable>
            </ScrollView>
        </SafeAreaView>
    )
}

// <Button style={styles.btn} title='example' onPress={ClickHandler} /> qui était à la place de test 
export default InfoScreen;

/* 
  <NavigationContainer>
            <Stack.Navigator>
                   <Stack.Screen name="article" component={ArticleScreen} />
                </Stack.Navigator>
    </NavigationContainer>
        
dans OnPress : ()=> navigation.navigate("article")

*/ 

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },


    scrollView: {
        margin : 5, 
      },

    searchButton: { 
        backgroundColor: '#fff', 
        width: Dimensions.get('screen').width - 20, /* va prendre la largeur de l'écran - les brodures gauches et droites */
        height: 60, 
        borderRadius: 30, /*doit être la moitié de la hauteur  */
        marginHorizontal: 10,  /* margin left et right*/ 
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center',
        position: "relative",
        top: 20, 
        zIndex: 100, /* pour que la barre soit au dessus d'une image */
    }, 
    
    searchButtonText: {
        fontSize: 16, 
        fontWeight: 'bold',
    }, 

    post: {
        backgroundColor: '#fff', 
        width: Dimensions.get('screen').width - 20, /* va prendre la largeur de l'écran - les brodures gauches et droites */ 
        borderRadius: 30, /*doit être la moitié de la hauteur  */
        marginHorizontal: 10,  /* margin left et right*/ 
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center',
        position : "relative", 
        marginTop : 10, 
        zIndex: 100,
    }, 
  });
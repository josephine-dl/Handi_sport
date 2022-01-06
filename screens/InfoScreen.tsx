import React from 'react';
import { StyleSheet, Dimensions, Button } from 'react-native';
import { Text, Pressable, View, ScrollView, FlatList} from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import Post from '../components/Post/index';
import { useState } from 'react';
import feed from '../assets/data/feed'  ; 
import Navigation from '../navigation';
import { SafeAreaView} from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const InfoScreen = () => {

    const navigation = useNavigation(); 

    /*const ClickHandler = () => {
        setName ('coco') ;
    } */

    const datalog = () => {
        console.warn('info_select btn clicked') ;
    }

    // les constantes contenant les infos des articles
    /*const post1 = feed[0];
    const post2 = feed[1];
    const post3 = feed[2];*/


    return (

        
        <SafeAreaView style={styles.container}>
           
            {/**<Pressable
                    style={styles.searchButton}
                    onPress={datalog} // log pour appli 
                >
                    <Fontisto name="search" size={25} color={"pink"} /> 

                    <Text style={styles.searchButtonText}>Informations_choisis</Text>

            </Pressable>*/ }

            

           {/*<ScrollView style = {styles.scrollView}> 
                <Text>
                                    
                </Text>
                <Text>
                    <Post post = {post1}/>
                    <Post post = {post2}/>
                    <Post post = {post3}/>
                </Text>
                
                
                {<Pressable
                    style={styles.post}
                    onPress = {()=> navigation.navigate('Article')}
                >
                    <Post post = {post2}/> 
                </Pressable>

                <Pressable
                    style={styles.post}
                    onPress = {()=> navigation.navigate('Article') } 
                >
                    <Post post = {post3}/> 
                </Pressable> }
            </ScrollView>*/} 

           { <FlatList
                style={styles.flatlist}
                data = {feed}
                renderItem = {({item})=> <Post post = {item} />}
            />}

        </SafeAreaView>
      
    )
}

// <Button style={styles.btn} title='example' onPress={ClickHandler} /> qui était à la place de test
export default InfoScreen;



const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },


    FlatList: {
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

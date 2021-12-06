import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../../types';
import LinkingConfiguration from '../../navigation/LinkingConfiguration';
import { StyleSheet, View, Text, Image} from "react-native";


const Post = (props) => {  // props dans les aprethèses si jamais 
    
    const post = props.post ; 

    return (
      <View style={styles.container}>
        
        {/**Titre  */} 
        <Text style={styles.titre}> 
            {post.titre}
        </Text> 

        {/* résumé/ouverture avec infos articles (paratexte et tout ) */}
        <Text style={styles.resume}> 
            {post.resume}
        </Text>

        {/*paratexte - infos de l'article, dates/écrit par qui/etc.  */}
        <Text style={styles.paratexte}>
           {post.paratexte} 
        </Text>

        {/* Image */}
        <Image 
          style={styles.image} 
          source={{uri: post.image}}  // image à mettre 
        /> 

        {/* article  */}
        <Text style={styles.contenu_article}> 
          {post.article}
        </Text>

      </View>

    ); 
}; 

export default Post;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      // alignItems: 'flex-start',
      justifyContent: 'center',
      margin:15, 
    },

    titre: {
      // a completer 
      fontSize: 20,
      textAlign : 'center', 
      fontWeight: 'bold',
      margin : 1,
    }, 

    resume: {
      // a completer 
      fontSize: 18,
      textAlign : 'left', 
      margin : 1, 
    }, 

    paratexte: {
      // a completer 
      fontSize: 14,
      color : '#5b5b5b' , 
      textAlign : 'left', 
      margin : 1,
    }, 

    image: {
      width: '100%', 
      // on ne veut pas une hauteur fixe mais une huateur qui dépend de la largeur 
      aspectRatio: 3/2, // ratio par rapport à la largueur 
      resizeMode:'cover', // cover the whole aera 
      margin : 1,
    }, 

    contenu_article: {
      // a completer 
      fontSize: 18,
      textAlign : 'left', 
      margin : 1,
    }, 

  });
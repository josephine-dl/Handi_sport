import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../../types';
import LinkingConfiguration from '../../navigation/LinkingConfiguration';
import { StyleSheet, View, Text, Image, Pressable, Dimensions} from "react-native";
import { useNavigation } from '@react-navigation/native';

const Post = (props) => {  // props dans les aprethèses si jamais

    const post = props.post ; 
    const navigation = useNavigation (); 

    const goToPostPage = () => {
        navigation.navigate("Article", {postId: post.id}) ; 
    }


    return (
      <Pressable onPress={goToPostPage}
      style={styles.container}>

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

      </Pressable>

    );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'flex-start',
    margin:15, 
    justifyContent: 'center',
    backgroundColor: '#fff', 
    width: Dimensions.get('screen').width - 20, //va prendre la largeur de l'écran - les brodures gauches et droites 
    borderRadius: 30, //doit être la moitié de la hauteur  
    marginHorizontal: 10,  // margin left et right
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
      margin : 2,
    },

    resume: {
      fontSize: 18,
      textAlign : 'left',
      margin : 1,
    },

    paratexte: {
      fontSize: 14,
      color : '#5b5b5b' ,
      textAlign : 'left',
      margin : 3,
    },

    image: {
      width: '100%',
      // on ne veut pas une hauteur fixe mais une huateur qui dépend de la largeur
      aspectRatio: 3/2, // ratio par rapport à la largueur
      resizeMode:'cover', // cover the whole aera
      borderRadius: 30,
    }
    
  });

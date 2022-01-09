import React from 'react';
import { StyleSheet } from 'react-native';

import { View, Text } from 'react-native';
import Post from '../components/Post';
import feed from '../assets/data/feed';
import PostDetailed from '../components/Post/postDetailedIndex';
import { useRoute } from '@react-navigation/native';
import { withTheme } from 'react-native-elements';

const ArticleScreen = () => {

    const route = useRoute () // permet de récupérer l'id de l'article 
    const post = feed.find(feed => feed.id === route.params.postId) 

    return (
        <View style={styles.container}>
            <Text>
                Bienvenue sur l'article sélectionné : 
            </Text>
            <PostDetailed post = {post} /> 
        </View>
    )
}

export default ArticleScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor : 'white', 
      paddingTop : 10, 
    },
    
    titre: {
        fontSize: 20,
        textAlign : 'center', 
        fontWeight: 'bold',
        margin : 3,
    }, 
  });

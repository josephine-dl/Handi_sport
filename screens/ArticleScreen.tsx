import React from 'react';
import { StyleSheet } from 'react-native';

import { View, Text } from 'react-native';

const ArticleScreen = () => {

    return (
        <View style={styles.container}>
            <Text>
                Bienvenue dans sur l'article sélectionné :
            </Text>
        </View>
    )
}

export default ArticleScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

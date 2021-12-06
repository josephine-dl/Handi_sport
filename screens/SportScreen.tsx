import React from 'react';
import { StyleSheet } from 'react-native';

import { View, Text } from 'react-native';

const SportScreen = () => {

    return (
        <View style={styles.container}>
            <Text>
                Bienvenue dans l'espace sportif !
            </Text>
        </View>
    )
}

export default SportScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
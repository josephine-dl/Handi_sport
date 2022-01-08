import React from 'react';
import { StyleSheet } from 'react-native';

import { View, Text } from 'react-native';

const CultureScreen = () => {

    return (
        <View style={styles.container}>
            <Text>
                Bienvenue dans l'espace culturel !
            </Text>
        </View>
    )
}

export default CultureScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
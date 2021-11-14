import React from 'react';
import { StyleSheet } from 'react-native';

import { View, Text } from 'react-native';

const ChatScreen = () => {

    return (
        <View style={styles.container}>
            <Text>
                Bienvenue dans l'espace discussion !
            </Text>
        </View>
    )
}

export default ChatScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
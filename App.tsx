import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import SplashScreen from './screens/SplashScreen'
import Login from './screens/Login'

import WorkScreen from './WorkScreen'
import {StyleSheet, View} from 'react-native'

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  }

  else {
    return (

      <SafeAreaProvider>
       <Navigation colorScheme={colorScheme} />
       <StatusBar />

      </SafeAreaProvider>
    );
  }
}

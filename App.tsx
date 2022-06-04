import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import * as Font from "expo-font";
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

export default function App() {
  const [fontLoaded, setLoaded] = useState(false);

  useEffect(() => {
    loadFonts();
  }, []);

  const loadFonts = async () => {
    await Font.loadAsync({
      "roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
      "roboto-light": require("./assets/fonts/Roboto-Light.ttf"),
      "roboto-medium": require("./assets/fonts/Roboto-Medium.ttf"),
      "roboto-thin": require("./assets/fonts/Roboto-Thin.ttf")
    });
    setLoaded(true);
  };

  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete && !fontLoaded) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}

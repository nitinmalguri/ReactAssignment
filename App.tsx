/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import OptionList from './src/OptionList';
import CounterScreen from './src/screen/CounterScreen';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const [screen, setScreen] = useState<'list' | 'counter'>('list');
  const safeAreaInsets = useSafeAreaInsets();

  if (screen === 'counter') {
    return (
      <View style={styles.container}>
        <CounterScreen onBack={() => setScreen('list')} />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <OptionList onSelect={option => {
        if (option === 'Counter') setScreen('counter');
      }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

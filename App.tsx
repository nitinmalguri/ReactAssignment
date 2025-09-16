
import OptionList from './src/OptionList';
import TimerScreen from './src/screen/TimerScreen';

import React, { useState } from 'react';
import CounterScreen from './src/screen/CounterScreen';
import GreetingScreen from './src/screen/GreetingScreen';
import { StatusBar, StyleSheet, useColorScheme, View, TouchableOpacity, Text } from 'react-native';
import ToggleScreen from './src/screen/ToggleScreen';
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
  const [screen, setScreen] = useState<'list' | 'counter' | 'greeting' | 'toggle' | 'timer'>('list');
  const safeAreaInsets = useSafeAreaInsets();

  if (screen === 'counter') {
    return (
      <View style={styles.container}>
        <CounterScreen onBack={() => setScreen('list')} />
      </View>
    );
  }
  if (screen === 'greeting') {
    return (
      <View style={styles.container}>
        <GreetingScreen />
        <View style={{ position: 'absolute', top: 40, left: 20 }}>
          <TouchableOpacity onPress={() => setScreen('list')}>
            <Text style={{ fontSize: 18, color: '#007AFF' }}>{'< Back'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  if (screen === 'toggle') {
    return (
      <View style={styles.container}>
        <ToggleScreen />
        <View style={{ position: 'absolute', top: 40, left: 20 }}>
          <TouchableOpacity onPress={() => setScreen('list')}>
            <Text style={{ fontSize: 18, color: '#007AFF' }}>{'< Back'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  if (screen === 'timer') {
    return (
      <View style={styles.container}>
        <TimerScreen />
        <View style={{ position: 'absolute', top: 40, left: 20 }}>
          <TouchableOpacity onPress={() => setScreen('list')}>
            <Text style={{ fontSize: 18, color: '#007AFF' }}>{'< Back'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <OptionList onSelect={option => {
        if (option === 'Counter') setScreen('counter');
        if (option === 'Greeting') setScreen('greeting');
        if (option === 'Toggle') setScreen('toggle');
        if (option === 'Timer') setScreen('timer');
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

import React, { useContext } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

import { DarkModeContext } from '../DarkModeContext';

const DarkModeToggleScreen = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  return (
    <View style={[styles.container, darkMode && styles.containerDark]}>
      <Text style={[styles.text, darkMode && styles.textDark]}>Dark Mode is {darkMode ? 'On' : 'Off'}</Text>
      <Switch
        value={darkMode}
        onValueChange={setDarkMode}
        thumbColor={darkMode ? '#fff' : '#333'}
        trackColor={{ false: '#ccc', true: '#333' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  containerDark: {
    backgroundColor: '#111',
  },
  text: {
    fontSize: 22,
    marginBottom: 20,
    color: '#222',
  },
  textDark: {
    color: '#fff',
  },
});

export default DarkModeToggleScreen;

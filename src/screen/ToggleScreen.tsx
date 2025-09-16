import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DarkModeContext } from '../DarkModeContext';

const ToggleScreen = () => {
  const [visible, setVisible] = useState(false);
  const { darkMode } = useContext(DarkModeContext);
  const themedStyles = getThemedStyles(darkMode);

  return (
    <SafeAreaView style={themedStyles.container}>
      <TouchableOpacity
        style={themedStyles.button}
        onPress={() => setVisible(v => !v)}
      >
        <Text style={themedStyles.buttonText}>
          {visible ? 'Hide Details' : 'Show Details'}
        </Text>
      </TouchableOpacity>
      {visible && (
        <View style={themedStyles.detailsBox}>
          <Text style={themedStyles.detailsText}>
            This is a sample description text. You can toggle its visibility using the button above.
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};


const getThemedStyles = (darkMode: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: darkMode ? '#181A20' : '#fff',
    },
    button: {
      backgroundColor: darkMode ? '#4F8EF7' : '#007AFF',
      paddingVertical: 16,
      paddingHorizontal: 32,
      borderRadius: 8,
      marginBottom: 24,
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    detailsBox: {
      backgroundColor: darkMode ? '#23262F' : '#f0f0f0',
      padding: 20,
      borderRadius: 8,
      width: 300,
      alignItems: 'center',
    },
    detailsText: {
      fontSize: 16,
      color: darkMode ? '#fff' : '#333',
      textAlign: 'center',
    },
  });

export default ToggleScreen;

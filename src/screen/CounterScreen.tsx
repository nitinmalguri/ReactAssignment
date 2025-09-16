import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { DarkModeContext } from '../DarkModeContext';

type CounterScreenProps = {
  onBack?: () => void;
};

const CounterScreen = ({ onBack }: CounterScreenProps) => {
  const [count, setCount] = useState(0);
  const insets = useSafeAreaInsets();
  const { darkMode } = useContext(DarkModeContext);

  const themedStyles = getThemedStyles(darkMode);

  return (
    <SafeAreaView style={themedStyles.container} edges={["top","left","right"]}>
      <Text style={themedStyles.count}>{count}</Text>
      <View style={themedStyles.buttonRow}>
        <TouchableOpacity style={themedStyles.button} onPress={() => setCount(count - 1)}>
          <Text style={themedStyles.buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={themedStyles.button} onPress={() => setCount(count + 1)}>
          <Text style={themedStyles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
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
    backButton: {
      position: 'absolute',
      top: 20,
      left: 20,
      padding: 10,
      zIndex: 1,
    },
    backButtonText: {
      fontSize: 18,
      color: darkMode ? '#4F8EF7' : '#007AFF',
    },
    count: {
      fontSize: 64,
      fontWeight: 'bold',
      marginBottom: 40,
      color: darkMode ? '#fff' : '#333',
    },
    buttonRow: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      backgroundColor: darkMode ? '#4F8EF7' : '#007AFF',
      padding: 20,
      borderRadius: 50,
      marginHorizontal: 20,
      width: 60,
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontSize: 32,
      fontWeight: 'bold',
    },
  });

export default CounterScreen;

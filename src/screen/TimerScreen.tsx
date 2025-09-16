import React, { useEffect, useRef, useState, useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DarkModeContext } from '../DarkModeContext';

const TimerScreen = () => {
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef<any>(null);
  const { darkMode } = useContext(DarkModeContext);
  const themedStyles = getThemedStyles(darkMode);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <SafeAreaView style={themedStyles.container}>
      <Text style={themedStyles.label}>Elapsed Time:</Text>
      <Text style={themedStyles.time}>{seconds} s</Text>
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
    label: {
      fontSize: 20,
      color: darkMode ? '#fff' : '#333',
      marginBottom: 10,
    },
    time: {
      fontSize: 48,
      fontWeight: 'bold',
      color: darkMode ? '#4F8EF7' : '#007AFF',
    },
  });

export default TimerScreen;

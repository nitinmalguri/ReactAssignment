import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const TimerScreen = () => {
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef<any>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>Elapsed Time:</Text>
      <Text style={styles.time}>{seconds} s</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 20,
    color: '#333',
    marginBottom: 10,
  },
  time: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#007AFF',
  },
});

export default TimerScreen;

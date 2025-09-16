import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface GreetingCardProps {
  name: string;
  message: string;
}

const GreetingCard: React.FC<GreetingCardProps> = ({ name, message }) => (
  <View style={styles.card}>
    <Text style={styles.name}>{name}</Text>
    <Text style={styles.message}>{message}</Text>
  </View>
);

const GreetingScreen = () => {
  return (
    <View style={styles.container}>
      <GreetingCard name="Yatish" message="Have a wonderful day!" />
      <GreetingCard name="Ishan" message="Keep up the great work!" />
      <GreetingCard name="Nitin" message="You are awesome!" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 24,
    marginVertical: 12,
    width: 300,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    alignItems: 'center',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 8,
  },
  message: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
});

export default GreetingScreen;

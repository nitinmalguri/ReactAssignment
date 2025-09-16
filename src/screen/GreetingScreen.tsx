import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DarkModeContext } from '../DarkModeContext';

interface GreetingCardProps {
  name: string;
  message: string;
  darkMode: boolean;
}

const GreetingCard: React.FC<GreetingCardProps> = ({ name, message, darkMode }) => {
  const themedStyles = getThemedStyles(darkMode);
  return (
    <View style={themedStyles.card}>
      <Text style={themedStyles.name}>{name}</Text>
      <Text style={themedStyles.message}>{message}</Text>
    </View>
  );
};

const GreetingScreen = () => {
  const { darkMode } = useContext(DarkModeContext);
  const themedStyles = getThemedStyles(darkMode);
  return (
    <View style={themedStyles.container}>
      <GreetingCard name="Yatish" message="Have a wonderful day!" darkMode={darkMode} />
      <GreetingCard name="Ishan" message="Keep up the great work!" darkMode={darkMode} />
      <GreetingCard name="Nitin" message="You are awesome!" darkMode={darkMode} />
    </View>
  );
};


const getThemedStyles = (darkMode: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: darkMode ? '#181A20' : '#f9f9f9',
    },
    card: {
      backgroundColor: darkMode ? '#23262F' : '#fff',
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
      color: darkMode ? '#4F8EF7' : '#007AFF',
      marginBottom: 8,
    },
    message: {
      fontSize: 16,
      color: darkMode ? '#fff' : '#333',
      textAlign: 'center',
    },
  });

export default GreetingScreen;

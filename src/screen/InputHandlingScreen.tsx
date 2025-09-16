import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { DarkModeContext } from '../DarkModeContext';

const InputHandlingScreen = () => {
  const [name, setName] = useState('');
  const [submittedName, setSubmittedName] = useState<string | null>(null);
  const { darkMode } = useContext(DarkModeContext);
  const themedStyles = getThemedStyles(darkMode);

  const handleSubmit = () => {
    setSubmittedName(name);
  };

  return (
    <View style={themedStyles.container}>
      <Text style={themedStyles.label}>Enter your name:</Text>
      <TextInput
        style={themedStyles.input}
        value={name}
        onChangeText={setName}
        placeholder="Type your name"
        placeholderTextColor={darkMode ? '#aaa' : '#888'}
      />
      <Button title="Submit" onPress={handleSubmit} />
      {submittedName && (
        <Text style={themedStyles.greeting}>Hello, {submittedName}!</Text>
      )}
    </View>
  );
};


const getThemedStyles = (darkMode: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
      backgroundColor: darkMode ? '#181A20' : '#fff',
    },
    label: {
      fontSize: 18,
      marginBottom: 8,
      color: darkMode ? '#fff' : '#222',
    },
    input: {
      width: '80%',
      borderWidth: 1,
      borderColor: darkMode ? '#444' : '#ccc',
      borderRadius: 4,
      padding: 8,
      marginBottom: 12,
      fontSize: 16,
      color: darkMode ? '#fff' : '#222',
      backgroundColor: darkMode ? '#23262F' : '#fff',
    },
    greeting: {
      marginTop: 20,
      fontSize: 20,
      fontWeight: 'bold',
      color: darkMode ? '#4F8EF7' : '#007AFF',
    },
  });

export default InputHandlingScreen;

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const InputHandlingScreen = () => {
  const [name, setName] = useState('');
  const [submittedName, setSubmittedName] = useState<string | null>(null);

  const handleSubmit = () => {
    setSubmittedName(name);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter your name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Type your name"
      />
      <Button title="Submit" onPress={handleSubmit} />
      {submittedName && (
        <Text style={styles.greeting}>Hello, {submittedName}!</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 12,
    fontSize: 16,
  },
  greeting: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007AFF',
  },
});

export default InputHandlingScreen;

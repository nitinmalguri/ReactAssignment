import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';


const MemoizedChild = React.memo(({ text }: { text: string }) => {
  console.log('MemoizedChild rendered');
  return (
    <View style={styles.childContainer}>
      <Text style={styles.childText}>Memoized Child: {text}</Text>
    </View>
  );
});

const NonMemoizedChild = ({ text }: { text: string }) => {
  console.log('NonMemoizedChild rendered');
  return (
    <View style={styles.childContainer}>
      <Text style={styles.childText}>Non-Memoized Child: {text}</Text>
    </View>
  );
};

const MemoizedComponentScreen = () => {
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Memoized Component</Text>
      <View style={styles.row}>
        <Button title="-" onPress={() => setCounter(c => c - 1)} />
        <Text style={styles.counter}>{counter}</Text>
        <Button title="+" onPress={() => setCounter(c => c + 1)} />
      </View>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="Type something..."
      />
  <MemoizedChild text={text} />
  <NonMemoizedChild text={text} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  counter: {
    fontSize: 24,
    marginHorizontal: 20,
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 20,
    fontSize: 16,
  },
  childContainer: {
    marginTop: 20,
    padding: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  childText: {
    fontSize: 18,
    color: '#333',
  },
});

export default MemoizedComponentScreen;

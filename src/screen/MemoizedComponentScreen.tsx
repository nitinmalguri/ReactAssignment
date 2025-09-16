import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { DarkModeContext } from '../DarkModeContext';


const MemoizedChild = React.memo(({ text, themedStyles }: { text: string, themedStyles: any }) => {
  console.log('MemoizedChild rendered');
  return (
    <View style={themedStyles.childContainer}>
      <Text style={themedStyles.childText}>Memoized Child: {text}</Text>
    </View>
  );
});

const NonMemoizedChild = ({ text, themedStyles }: { text: string, themedStyles: any }) => {
  console.log('NonMemoizedChild rendered');
  return (
    <View style={themedStyles.childContainer}>
      <Text style={themedStyles.childText}>Non-Memoized Child: {text}</Text>
    </View>
  );
};

const MemoizedComponentScreen = () => {
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState('');
  const { darkMode } = useContext(DarkModeContext);
  const themedStyles = getThemedStyles(darkMode);

  return (
    <View style={themedStyles.container}>
      <Text style={themedStyles.title}>Memoized Component</Text>
      <View style={themedStyles.row}>
        <Button title="-" onPress={() => setCounter(c => c - 1)} />
        <Text style={themedStyles.counter}>{counter}</Text>
        <Button title="+" onPress={() => setCounter(c => c + 1)} />
      </View>
      <TextInput
        style={themedStyles.input}
        value={text}
        onChangeText={setText}
        placeholder="Type something..."
        placeholderTextColor={darkMode ? '#aaa' : '#888'}
      />
      <MemoizedChild text={text} themedStyles={themedStyles} />
      <NonMemoizedChild text={text} themedStyles={themedStyles} />
    </View>
  );
};


const getThemedStyles = (darkMode: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: darkMode ? '#181A20' : '#fff',
    },
    title: {
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 20,
      color: darkMode ? '#fff' : '#222',
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
    },
    counter: {
      fontSize: 24,
      marginHorizontal: 20,
      color: darkMode ? '#fff' : '#222',
    },
    input: {
      width: '80%',
      borderWidth: 1,
      borderColor: darkMode ? '#444' : '#ccc',
      borderRadius: 4,
      padding: 8,
      marginBottom: 20,
      fontSize: 16,
      color: darkMode ? '#fff' : '#222',
      backgroundColor: darkMode ? '#23262F' : '#fff',
    },
    childContainer: {
      marginTop: 20,
      padding: 16,
      backgroundColor: darkMode ? '#23262F' : '#f0f0f0',
      borderRadius: 8,
    },
    childText: {
      fontSize: 18,
      color: darkMode ? '#fff' : '#333',
    },
  });

export default MemoizedComponentScreen;

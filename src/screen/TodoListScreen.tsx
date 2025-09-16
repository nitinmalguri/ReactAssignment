import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { DarkModeContext } from '../DarkModeContext';

const TodoListScreen = () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState<string[]>([]);
  const { darkMode } = useContext(DarkModeContext);
  const themedStyles = getThemedStyles(darkMode);

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input.trim()]);
      setInput('');
    }
  };

  const deleteTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <View style={themedStyles.container}>
      <Text style={themedStyles.title}>Todo List</Text>
      <View style={themedStyles.inputRow}>
        <TextInput
          style={themedStyles.input}
          value={input}
          onChangeText={setInput}
          placeholder="Enter a todo item"
          placeholderTextColor={darkMode ? '#aaa' : '#888'}
        />
        <Button title="Add" onPress={addTodo} />
      </View>
      <FlatList
        data={todos}
        keyExtractor={(_, idx) => idx.toString()}
        renderItem={({ item, index }) => (
          <View style={themedStyles.todoRow}>
            <Text style={themedStyles.todoText}>{item}</Text>
            <TouchableOpacity style={themedStyles.deleteBtn} onPress={() => deleteTodo(index)}>
              <Text style={themedStyles.deleteText}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={<Text style={themedStyles.empty}>No todos yet.</Text>}
      />
    </View>
  );
};


const getThemedStyles = (darkMode: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: darkMode ? '#181A20' : '#fff',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
      textAlign: 'center',
      color: darkMode ? '#fff' : '#222',
    },
    inputRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 16,
    },
    input: {
      flex: 1,
      borderWidth: 1,
      borderColor: darkMode ? '#444' : '#ccc',
      borderRadius: 4,
      padding: 8,
      marginRight: 8,
      fontSize: 16,
      color: darkMode ? '#fff' : '#222',
      backgroundColor: darkMode ? '#23262F' : '#fff',
    },
    todoRow: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 8,
      borderBottomWidth: 1,
      borderBottomColor: darkMode ? '#333' : '#eee',
    },
    todoText: {
      flex: 1,
      fontSize: 18,
      color: darkMode ? '#fff' : '#222',
    },
    deleteBtn: {
      backgroundColor: '#ff3b30',
      paddingVertical: 4,
      paddingHorizontal: 12,
      borderRadius: 4,
    },
    deleteText: {
      color: '#fff',
      fontWeight: 'bold',
    },
    empty: {
      textAlign: 'center',
      color: darkMode ? '#aaa' : '#aaa',
      marginTop: 40,
      fontSize: 16,
    },
  });

export default TodoListScreen;

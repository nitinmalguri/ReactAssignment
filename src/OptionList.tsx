import React from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const options = [
  { key: 'Counter' },
  { key: 'Greeting' },
  { key: 'Toggle' },
  { key: 'Timer' },
  { key: 'Input' },
  { key: 'Todo' },
  { key: 'Responsive Card Grid' },
  { key: 'Dark Mode Toggle' },
];

const OptionList = ({ onSelect }: { onSelect?: (option: string) => void }) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={options}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => onSelect && onSelect(item.key)}
          >
            <Text style={styles.text}>{item.key}</Text>
          </TouchableOpacity>
        )}
      />
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
  item: {
    padding: 20,
    marginVertical: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    width: 200,
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: '#333',
  },
});

export default OptionList;

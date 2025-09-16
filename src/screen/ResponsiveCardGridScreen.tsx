import React from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList } from 'react-native';

const cards = [
  { id: '1', title: 'Card 1', description: 'First card.' },
  { id: '2', title: 'Card 2', description: 'Second card.' },
  { id: '3', title: 'Card 3', description: 'Third card.' },
  { id: '4', title: 'Card 4', description: 'Fourth card.' },
  { id: '5', title: 'Card 5', description: 'Fifth card.' },
  { id: '6', title: 'Card 6', description: 'Sixth card.' },
];

const numColumns = 2;

const ResponsiveCardGridScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cards}
        keyExtractor={item => item.id}
        numColumns={numColumns}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        )}
        contentContainerStyle={styles.grid}
      />
    </View>
  );
};

const cardMargin = 10;
const cardWidth = (Dimensions.get('window').width - cardMargin * 3) / numColumns;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: cardMargin,
  },
  grid: {
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    margin: cardMargin,
    width: cardWidth,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
});

export default ResponsiveCardGridScreen;

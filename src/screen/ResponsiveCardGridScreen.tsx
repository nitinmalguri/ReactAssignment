import React, { useContext } from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList } from 'react-native';
import { DarkModeContext } from '../DarkModeContext';

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
  const { darkMode } = useContext(DarkModeContext);
  const themedStyles = getThemedStyles(darkMode);
  return (
    <View style={themedStyles.container}>
      <FlatList
        data={cards}
        keyExtractor={item => item.id}
        numColumns={numColumns}
        renderItem={({ item }) => (
          <View style={themedStyles.card}>
            <Text style={themedStyles.title}>{item.title}</Text>
            <Text style={themedStyles.description}>{item.description}</Text>
          </View>
        )}
        contentContainerStyle={themedStyles.grid}
      />
    </View>
  );
};


const cardMargin = 10;
const cardWidth = (Dimensions.get('window').width - cardMargin * 3) / numColumns;


const getThemedStyles = (darkMode: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: darkMode ? '#181A20' : '#f8f8f8',
      padding: cardMargin,
    },
    grid: {
      justifyContent: 'center',
    },
    card: {
      backgroundColor: darkMode ? '#23262F' : '#fff',
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
      color: darkMode ? '#4F8EF7' : '#222',
    },
    description: {
      fontSize: 14,
      color: darkMode ? '#aaa' : '#555',
    },
  });

export default ResponsiveCardGridScreen;

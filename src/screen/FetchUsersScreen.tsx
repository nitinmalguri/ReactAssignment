import React, { useContext } from 'react';
import { View, Text, ActivityIndicator, FlatList, StyleSheet } from 'react-native';
import { useFetch } from '../hooks/useFetch';
import { DarkModeContext } from '../DarkModeContext';

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

const FetchUsersScreen = () => {
  const { loading, data, error } = useFetch(USERS_URL);
  const { darkMode } = useContext(DarkModeContext);
  const themedStyles = getThemedStyles(darkMode);

  return (
    <View style={themedStyles.container}>
      {loading && <ActivityIndicator size="large" color={darkMode ? '#4F8EF7' : '#007AFF'} />}
      {error && <Text style={themedStyles.error}>Error: {error}</Text>}
      {data && (
        <FlatList
          data={data}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <View style={themedStyles.userItem}>
              <Text style={themedStyles.userName}>{item.name}</Text>
              <Text style={themedStyles.userEmail}>{item.email}</Text>
            </View>
          )}
        />
      )}
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
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
      color: darkMode ? '#fff' : '#222',
    },
    error: {
      color: 'red',
      marginBottom: 20,
      textAlign: 'center',
    },
    userItem: {
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: darkMode ? '#333' : '#eee',
    },
    userName: {
      fontSize: 18,
      fontWeight: 'bold',
      color: darkMode ? '#4F8EF7' : '#222',
    },
    userEmail: {
      fontSize: 14,
      color: darkMode ? '#aaa' : '#555',
    },
  });

export default FetchUsersScreen;

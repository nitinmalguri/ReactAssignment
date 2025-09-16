
import React, { useState } from 'react';
import { StatusBar, StyleSheet, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import OptionList from './src/OptionList';
import CounterScreen from './src/screen/CounterScreen';
import GreetingScreen from './src/screen/GreetingScreen';
import ToggleScreen from './src/screen/ToggleScreen';
import TimerScreen from './src/screen/TimerScreen';
import InputHandlingScreen from './src/screen/InputHandlingScreen';
import TodoListScreen from './src/screen/TodoListScreen';
import ResponsiveCardGridScreen from './src/screen/ResponsiveCardGridScreen';
import MemoizedComponentScreen from './src/screen/MemoizedComponentScreen';
import FetchUsersScreen from './src/screen/FetchUsersScreen';
import DarkModeToggleScreen, { DarkModeContext } from './src/screen/DarkModeToggleScreen';

const Stack = createNativeStackNavigator();

function App() {
  const systemDarkMode = useColorScheme() === 'dark';
  const [darkMode, setDarkMode] = useState(systemDarkMode);
  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      <SafeAreaProvider>
        <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
        <NavigationContainer>
          <Stack.Navigator initialRouteName="OptionList" screenOptions={{ headerShown: true }}>
          <Stack.Screen name="OptionList" options={{ title: 'Options' }}>
            {({ navigation }) => (
              <OptionList
                onSelect={option => {
                  if (option === 'Counter') navigation.navigate('Counter');
                  if (option === 'Greeting') navigation.navigate('Greeting');
                  if (option === 'Toggle') navigation.navigate('Toggle');
                  if (option === 'Timer') navigation.navigate('Timer');
                  if (option === 'Input Handling') navigation.navigate('InputHandling');
                  if (option === 'Todo') navigation.navigate('TodoList');
                  if (option === 'Responsive Card Grid') navigation.navigate('ResponsiveCardGrid');
                  if (option === 'Memoized Component') navigation.navigate('MemoizedComponent');
                  if (option === 'Fetch Users') navigation.navigate('FetchUsers');
                  if (option === 'Dark Mode Toggle') navigation.navigate('DarkModeToggle');
                }}
              />
            )}
          </Stack.Screen>
          <Stack.Screen name="DarkModeToggle" options={{ title: 'Dark Mode Toggle' }}>
            {() => <DarkModeToggleScreen />}
          </Stack.Screen>
          <Stack.Screen name="TodoList" options={{ title: 'Todo List' }}>
            {() => <TodoListScreen />}
          </Stack.Screen>
          <Stack.Screen name="Counter" options={{ title: 'Counter' }}>
            {() => <CounterScreen />}
          </Stack.Screen>
          <Stack.Screen name="Greeting" options={{ title: 'Greeting' }}>
            {({ navigation }) => <GreetingScreen />}
          </Stack.Screen>
          <Stack.Screen name="Toggle" options={{ title: 'Toggle' }}>
            {({ navigation }) => <ToggleScreen />}
          </Stack.Screen>
          <Stack.Screen name="Timer" options={{ title: 'Timer' }}>
            {({ navigation }) => <TimerScreen />}
          </Stack.Screen>
          <Stack.Screen name="InputHandling" options={{ title: 'Input Handling' }}>
            {({ navigation }) => <InputHandlingScreen />}
          </Stack.Screen>
          <Stack.Screen name="ResponsiveCardGrid" options={{ title: 'Responsive Card Grid' }}>
            {() => <ResponsiveCardGridScreen />}
          </Stack.Screen>
          <Stack.Screen name="MemoizedComponent" options={{ title: 'Memoized Component' }}>
            {() => <MemoizedComponentScreen />}
          </Stack.Screen>
                    <Stack.Screen name="FetchUsers" options={{ title: 'Fetch Users' }}>
            {() => <FetchUsersScreen />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
    </DarkModeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ToggleScreen = () => {
  const [visible, setVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setVisible(v => !v)}
      >
        <Text style={styles.buttonText}>
          {visible ? 'Hide Details' : 'Show Details'}
        </Text>
      </TouchableOpacity>
      {visible && (
        <View style={styles.detailsBox}>
          <Text style={styles.detailsText}>
            This is a sample description text. You can toggle its visibility using the button above.
          </Text>
        </View>
      )}
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
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginBottom: 24,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  detailsBox: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderRadius: 8,
    width: 300,
    alignItems: 'center',
  },
  detailsText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
});

export default ToggleScreen;

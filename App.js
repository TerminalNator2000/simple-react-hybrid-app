import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [count, setCount] = React.useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Hybrid App with React Native</Text>
      <Text style={styles.counter}>Count: {count}</Text>
      <Button title="Increase" onPress={() => setCount(count + 1)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
    color: '#333',
  },
  counter: {
    fontSize: 18,
    marginBottom: 20,
  },
});

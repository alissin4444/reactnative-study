import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export default function App() {
  const [text, setText] = useState('Let me show what are you missing');
  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <Button title="deixar" onPress={ () => setText("Paradise") }/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

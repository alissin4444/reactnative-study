import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';

export default function App() {
  const [state, setState] = useState({
    text: "Let me show what are you missing",
    value: false,
  });
  return (
    <>
      <View style={styles.container}>
        <Text>{state.text}</Text>
        <View style={{marginTop: 20}}>
          {state.value &&
            <Image 
              style={{width: 200, height: 200}}
              source={{uri: "https://data.whicdn.com/images/332471200/large.jpg"}}
            />
          }
        </View>
        <View style={{marginTop: 20}}>
          {!state.value && 
            <Button
              title="Yes"
              color="#8c14fc"
              onPress={() => setState({text: "Paradise", value: true})}
            />
          }
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

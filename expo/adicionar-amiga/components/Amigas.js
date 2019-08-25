import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Amiga = props => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={props.onDelete.bind(this, props.idAmiga)}>
      <View style={styles.amigaContainer}>
        <Text style={styles.amiga}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  amigaContainer: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 4,
    width: '100%',
    marginBottom: 15,
  },
  amiga: {
    textAlign: 'center',
    color: '#999',
  },
});

export default Amiga;

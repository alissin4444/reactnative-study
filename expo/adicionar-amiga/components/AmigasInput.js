import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  StatusBar,
} from 'react-native';
import Constants from 'expo-constants';

const AmigaInput = props => {
  const [input, setInput] = useState({
    amiga: '',
  });

  function amigaInputHandler(amiga) {
    const newInput = { ...input };
    newInput.amiga = amiga;
    setInput(newInput);
  }

  const adicionarAmigaHandler = () => {
    props.adicionaramigaHandler(input.amiga);
    const newInput = { ...input };
    newInput.amiga = '';
    setInput(newInput);
  };

  return (
    <>
      <Modal visible={props.visible} animationType="fade">
        <View style={styles.fullContainer} onPress={props.cancelModal}>
          <View style={styles.formContainer}>
            <View>
              <Text style={styles.mainTitle}>
                Adicione uma nova amiga
              </Text>
            </View>
            <TextInput
              placeholder="Digite o nome de sua amiga"
              placeholderTextColor="#888"
              style={styles.textInput}
              onChangeText={amigaInputHandler}
              value={input.amiga}
            />
            <View style={styles.formButtons}>
              <Button
                title="Cancelar"
                color="#a96dad"
                onPress={props.cancelModal}
              />
              <Button
                title="Adicionar"
                color="#a537fd"
                onPress={adicionarAmigaHandler}
              />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  fullContainer: {
    flex: 1,
    backgroundColor: '#f1e7fe',
    padding: 30,
    justifyContent: 'center',
  },
  mainTitle: {
    fontSize: 20,
    color: "#555",
    marginBottom: 20
  },
  textInput: {
    padding: 10,
    marginBottom: 25,
    width: '100%',
    backgroundColor: '#fff',
    color: '#555',
    borderRadius: 4,
    textAlign: "center"
  },
  formContainer: {
    justifyContent: 'space-between',
    alignItems: "center"
  },
  formButtons: {
    width: "60%",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default AmigaInput;

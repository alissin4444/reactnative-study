import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Button,
  StatusBar,
  FlatList,
  Text,
} from 'react-native';
import Constants from 'expo-constants';

import Amiga from './components/Amiga';
import AmigaInput from './components/AmigaInput';

export default function App() {
  const [listaAmigas, setListaAmigas] = useState([]);

  const [isAddModal, setIsAddModal] = useState(false);

  const adicionaramigaHandler = amigaTitle => {
    if (amigaTitle !== '') {
      setListaAmigas([
        ...listaAmigas,
        { amiga: amigaTitle, index: Math.random().toString() },
      ]);
    }
    setIsAddModal(false);
  };

  const cancelarModal = () => setIsAddModal(false);

  const removeramigaHandler = amigaId => {
    const newListaAmigas = [...listaAmigas];
    setListaAmigas(newListaAmigas.filter(amiga => amiga.index !== amigaId));
  };

  return (
    <>
      <View style={styles.statusBar}>
        <StatusBar barStyle="dark-content" />
      </View>
      <View style={styles.fullContainer}>
        <View style={styles.titleOfPageContainer}>
          <Text style={styles.titleOfPage}>Amigas do Alissin</Text>
        </View>
        <Button
          title="Adicionar nova amiga"
          color="#a537fd"
          onPress={() => setIsAddModal(true)}
        />
        <AmigaInput
          adicionaramigaHandler={adicionaramigaHandler}
          visible={isAddModal}
          cancelModal={cancelarModal}
        />
        <FlatList
          keyExtractor={(item, index) => item.index}
          style={styles.listaContainer}
          data={listaAmigas}
          renderItem={amiga => (
            <Amiga idAmiga={amiga.item.index} onDelete={removeramigaHandler}>
              {amiga.item.amiga}
            </Amiga>
          )}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: '#d1d7d9',
    height: Constants.statusBarHeight,
  },
  fullContainer: {
    flex: 1,
    backgroundColor: '#e4e9ed',
    padding: 30,
  },
  listaContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  titleOfPageContainer: {
    marginBottom: 15,
  },
  titleOfPage: {
    textAlign: 'center',
    fontSize: 25,
    color: '#555',
  },
});

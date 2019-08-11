import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default class App extends Component {
  state = {
    idade: 0
  };

  idadeChangedHandler = event => {
    this.setState({
      idade: event
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ marginBottom: 50, color: "#2ecc71" }}>
          Você já viveu: {2019 - this.state.idade} anos
        </Text>
        <Text style={{ marginBottom: 50, color: "#2ecc71" }}>
          Você já viveu: {(2019 - this.state.idade) * 12} meses
        </Text>
        <Text style={{ marginBottom: 50, color: "#2ecc71" }}>
          Você já viveu: {(2019 - this.state.idade) * 12 * 4} semanas
        </Text>
        <Text style={{ marginBottom: 50, color: "#2ecc71" }}>
          Você já viveu: {(2019 - this.state.idade) * 12 * 4 * 30} dias
        </Text>
        <Text style={{ marginBottom: 50, color: "#2ecc71" }}>
          Você já viveu: {(2019 - this.state.idade) * 12 * 4 * 30 * 1440}{" "}
          minutos
        </Text>
        <Text style={{ marginBottom: 50, color: "#2ecc71" }}>
          Você já viveu:{" "}
          {(2019 - this.state.idade) * 12 * 4 * 30 * 1440 * (3600 * 24)}{" "}
          segundos
        </Text>
        <TextInput
          style={{ width: 300 }}
          placeholder="Digite sua data de nascimento"
          value={this.state.idade}
          onChangeText={this.idadeChangedHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  }
});

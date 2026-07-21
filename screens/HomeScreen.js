import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [nome, setNome] = useState('');

  function handleEntrar() {
    if (nome.trim() === '') {
      Alert.alert('Atenção', 'Digite seu nome antes de continuar.');
      return;
    }
    navigation.navigate('Tarefas', { nomeUsuario: nome });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Minha Rotina</Text>
      <Text style={styles.descricao}>Organize suas tarefas diárias de forma simples.</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />

      <TouchableOpacity style={styles.botao} onPress={handleEntrar}>
        <Text style={styles.botaoTexto}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 24, 
    backgroundColor: '#FFF7F0' 
  },
  titulo: { 
    fontSize: 30, 
    fontWeight: 'bold', 
    color: '#E85D04', 
    marginBottom: 10 
  },
  descricao: { 
    fontSize: 15, 
    color: '#666666', 
    textAlign: 'center', 
    marginBottom: 30 
  },
  input: { 
    width: '100%', 
    borderWidth: 1, 
    borderColor: '#F5C89D', 
    borderRadius: 10, 
    padding: 12, 
    backgroundColor: '#fff', 
    marginBottom: 20 
  },
  botao: { 
    width: '100%', 
    backgroundColor: '#E85D04', 
    padding: 14, 
    borderRadius: 10, 
    alignItems: 'center' 
  },
  botaoTexto: { 
    color: '#fff', 
    fontWeight: 'bold', 
    fontSize: 16 
  },
});
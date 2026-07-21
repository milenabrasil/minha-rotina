import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function DetalhesScreen({ route, navigation }) {
  const { tarefa } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{tarefa}</Text>
      <Text style={styles.descricao}>Essa atividade faz parte da sua rotina diária.</Text>

      <TouchableOpacity style={styles.botao} onPress={() => navigation.goBack()}>
        <Text style={styles.botaoTexto}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24, backgroundColor: '#FFF7F0' },
  titulo: { fontSize: 24, fontWeight: 'bold', color: '#E85D04', marginBottom: 14, textAlign: 'center' },
  descricao: { fontSize: 15, color: '#666666', textAlign: 'center', marginBottom: 30 },
  botao: { backgroundColor: '#E85D04', paddingVertical: 14, paddingHorizontal: 40, borderRadius: 10 },
  botaoTexto: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

export default function TarefaItem({ tarefa, onPress, onConcluir, onExcluir }) {
  return (
    <View style={styles.item}>
      <TouchableOpacity style={styles.textoArea} onPress={onPress}>
        <Text style={[styles.itemTexto, tarefa.concluida && styles.itemConcluido]}>
          {tarefa.nome}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onConcluir}>
        <Text style={styles.icone}>{tarefa.concluida ? '✅' : '⬜'}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onExcluir}>
        <Text style={styles.icone}>🗑️</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 14,
    borderRadius: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#F5C89D',
  },
  textoArea: { flex: 1 },
  itemTexto: { fontSize: 16, color: '#333333' },
  itemConcluido: { textDecorationLine: 'line-through', color: '#999' },
  icone: { fontSize: 20, marginLeft: 12 },
});
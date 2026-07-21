import React, { useState, useEffect } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Alert,
} from 'react-native';
import {
  collection, addDoc, query, where, onSnapshot, orderBy, doc, updateDoc, deleteDoc,
} from 'firebase/firestore';
import { db } from '../firebaseConfig';
import TarefaItem from '../components/TarefaItem';

export default function TarefasScreen({ route, navigation }) {
  const { nomeUsuario } = route.params;
  const [tarefa, setTarefa] = useState('');
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, 'tarefas'),
      where('usuario', '==', nomeUsuario),
      orderBy('criadoEm', 'desc')
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const lista = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTarefas(lista);
    });

    return () => unsubscribe();
  }, [nomeUsuario]);

  async function adicionarTarefa() {
    if (tarefa.trim() === '') {
      Alert.alert('Atenção', 'Digite uma tarefa antes de adicionar.');
      return;
    }

    try {
      await addDoc(collection(db, 'tarefas'), {
        nome: tarefa,
        usuario: nomeUsuario,
        criadoEm: new Date(),
        concluida: false,
      });
      setTarefa('');
    } catch (error) {
      Alert.alert('Erro ao salvar', error.message);
    }
  }

  async function alternarConcluida(item) {
    try {
      const tarefaRef = doc(db, 'tarefas', item.id);
      await updateDoc(tarefaRef, { concluida: !item.concluida });
    } catch (error) {
      Alert.alert('Erro ao atualizar', error.message);
    }
  }

  async function excluirTarefa(id) {
    try {
      const tarefaRef = doc(db, 'tarefas', id);
      await deleteDoc(tarefaRef);
    } catch (error) {
      Alert.alert('Erro ao excluir', error.message);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.saudacao}>Olá, {nomeUsuario}! Organize suas tarefas de hoje.</Text>

      <TouchableOpacity
        style={styles.botaoFrase}
        onPress={() => navigation.navigate('Frase')}
      >
        <Text style={styles.botaoFraseTexto}>💡 Ver frase do dia</Text>
      </TouchableOpacity>

      <View style={styles.inputArea}>
        <TextInput
          style={styles.input}
          placeholder="Nova tarefa"
          value={tarefa}
          onChangeText={setTarefa}
        />
        <TouchableOpacity style={styles.botaoAdicionar} onPress={adicionarTarefa}>
          <Text style={styles.botaoAdicionarTexto}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={tarefas}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lista}
        renderItem={({ item }) => (
          <TarefaItem
            tarefa={item}
            onPress={() => navigation.navigate('Detalhes', { tarefa: item.nome })}
            onConcluir={() => alternarConcluida(item)}
            onExcluir={() => excluirTarefa(item.id)}
          />
        )}
        ListEmptyComponent={
          <Text style={styles.vazio}>Nenhuma tarefa ainda. Adicione a primeira!</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#FFF7F0' },
  saudacao: { fontSize: 18, fontWeight: 'bold', color: '#E85D04', marginBottom: 12 },
  botaoFrase: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E85D04',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 16,
  },
  botaoFraseTexto: {
    color: '#E85D04',
    fontWeight: 'bold',
  },
  inputArea: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#F5C89D',
    borderRadius: 10,
    padding: 12,
    backgroundColor: '#fff',
    marginRight: 10,
  },
  botaoAdicionar: {
    backgroundColor: '#E85D04',
    width: 46,
    height: 46,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botaoAdicionarTexto: { color: '#fff', fontSize: 22, fontWeight: 'bold' },
  lista: { paddingBottom: 20 },
  vazio: { textAlign: 'center', color: '#777', marginTop: 30 },
});
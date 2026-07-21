import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function FraseScreen({ navigation }) {
  const [frase, setFrase] = useState('');

  useEffect(() => {
    const frases = [
      'Organização é o primeiro passo para a produtividade.',
      'Pequenas ações diárias geram grandes resultados.',
      'Comece simples, mas comece.',
      'Uma rotina bem planejada deixa o dia mais leve.',
      'Cada tarefa concluída é um passo a mais no seu objetivo.',
      'Produtividade não é fazer tudo, é fazer o que importa.',
    ];

    const indiceAleatorio = Math.floor(Math.random() * frases.length);
    setFrase(frases[indiceAleatorio]);
  }, []);

  function gerarNovaFrase() {
    const frases = [
      'Organização é o primeiro passo para a produtividade.',
      'Pequenas ações diárias geram grandes resultados.',
      'Comece simples, mas comece.',
      'Uma rotina bem planejada deixa o dia mais leve.',
      'Cada tarefa concluída é um passo a mais no seu objetivo.',
      'Produtividade não é fazer tudo, é fazer o que importa.',
    ];

    const indiceAleatorio = Math.floor(Math.random() * frases.length);
    setFrase(frases[indiceAleatorio]);
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.icone}>💡</Text>

          <Text style={styles.titulo}>Frase do Dia</Text>

          <Text style={styles.frase}>
            “{frase}”
          </Text>

          <Text style={styles.descricao}>
            Use essa mensagem como motivação para organizar sua rotina.
          </Text>
        </View>

        <TouchableOpacity style={styles.botaoPrincipal} onPress={gerarNovaFrase}>
          <Text style={styles.textoBotaoPrincipal}>Gerar nova frase</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoSecundario} onPress={() => navigation.goBack()}>
          <Text style={styles.textoBotaoSecundario}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFF7F0',
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },

  card: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 28,
    alignItems: 'center',
    elevation: 4,
  },

  icone: {
    fontSize: 46,
    marginBottom: 12,
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#E85D04',
    marginBottom: 20,
  },

  frase: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333333',
    textAlign: 'center',
    lineHeight: 30,
    marginBottom: 18,
  },

  descricao: {
    fontSize: 15,
    color: '#666666',
    textAlign: 'center',
    lineHeight: 22,
  },

  botaoPrincipal: {
    width: '100%',
    backgroundColor: '#E85D04',
    padding: 15,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 24,
  },

  textoBotaoPrincipal: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  botaoSecundario: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#E85D04',
    padding: 15,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 12,
  },

  textoBotaoSecundario: {
    color: '#E85D04',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
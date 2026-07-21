# Minha Rotina 

Aplicativo mobile desenvolvido em **React Native** com **Expo**, que permite ao usuário se identificar pelo nome, cadastrar tarefas do dia a dia e acompanhar sua rotina de forma simples e organizada. Os dados são armazenados e sincronizados em tempo real utilizando o **Firebase (Cloud Firestore)**.

## Sobre o app

O app foi desenvolvido como atividade da disciplina de Desenvolvimento Mobile, com o objetivo de aplicar os principais conceitos estudados em aula: componentes básicos do React Native, hooks (`useState`, `useEffect`), Flexbox, navegação entre telas e integração com um banco de dados em nuvem.

### Telas

1. **Tela Inicial (Home)** — o usuário digita seu nome e acessa o app.
2. **Tela de Tarefas** — tela principal, onde o usuário adiciona, marca como concluída, exclui e visualiza suas tarefas em uma lista dinâmica.
3. **Tela de Detalhes** — exibida ao tocar em uma tarefa, mostrando informações sobre ela.
4. **Frase do Dia** (desafio extra) — exibe uma frase motivacional aleatória.

##  Tecnologias utilizadas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [React Navigation](https://reactnavigation.org/) (Native Stack)
- [Firebase](https://firebase.google.com/) — Cloud Firestore

## Componentes e conceitos aplicados

- `View`, `Text`, `TextInput`, `TouchableOpacity`
- `FlatList` para renderização dinâmica da lista de tarefas
- `useState` para controle de formulários e estados locais
- `useEffect` combinado com `onSnapshot` do Firestore para escutar mudanças em tempo real
- Flexbox (`flex`, `justifyContent`, `alignItems`) para layout
- Navegação entre telas com parâmetros (`navigation.navigate` / `route.params`)
- Componentização (`components/TarefaItem.js`)

## Integração com Firebase

As tarefas são salvas na coleção `tarefas` do Cloud Firestore, com os campos:

| Campo | Tipo | Descrição |
|---|---|---|
| `nome` | string | Texto da tarefa |
| `usuario` | string | Nome de quem criou a tarefa |
| `criadoEm` | timestamp | Data/hora de criação |
| `concluida` | boolean | Indica se a tarefa foi concluída |

A tela de Tarefas usa `onSnapshot` para manter a lista sincronizada em tempo real, filtrando apenas as tarefas do usuário atual.

## Como rodar o projeto

1. Clone o repositório:
```bash
git clone <URL_DO_REPOSITORIO>
cd MinhaRotina
```

2. Instale as dependências:
```bash
npm install
```

3. Configure o Firebase: crie um arquivo `firebaseConfig.js` na raiz do projeto com as credenciais do seu próprio projeto no [Firebase Console](https://console.firebase.google.com), seguindo o modelo:
```js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_PROJETO.firebaseapp.com",
  projectId: "SEU_PROJETO_ID",
  storageBucket: "SEU_PROJETO.appspot.com",
  messagingSenderId: "SEU_SENDER_ID",
  appId: "SEU_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
```

4. Rode o projeto:
```
npx expo start
```

5. Abra no **Expo Go** (celular), emulador Android/iOS, ou pressione `w` para abrir no navegador.

## Autoria

Trabalho desenvolvido para a disciplina de Desenvolvimento Mobile por:

- Milena Brasil
- Maria Eduarda Viana
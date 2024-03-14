import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ToDoList from './components/ToDoList.jsx';
import ToDoForm from './components/ToDoForm.jsx';


function App() {
  return (
    <SafeAreaView style={{flex: 1, paddingTop: 40, paddingBottom: 20,}}>
      <ToDoList />
      <ToDoForm />
    </SafeAreaView>
  );
}

export default App;

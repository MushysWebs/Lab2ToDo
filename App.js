import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ToDoList from './components/ToDoList.jsx';
import ToDoForm from './components/ToDoForm.jsx';


function App() {

  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog',
  ])

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 40, paddingBottom: 20, }}>
      <ToDoList tasks={tasks} />
      <ToDoForm />
    </SafeAreaView>
  );
}

export default App;

import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

function ToDoList({ tasks, removeTask }) {
  return (
    <ScrollView>
      {tasks.map((task, index) => (
        <View key={index} style={styles.task}>
          <Text style={styles.taskText}>{task}</Text>
          <TouchableOpacity onPress={() => removeTask(index)} style={styles.removeButton}>
            <Text style={styles.removeButtonText}>X</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  task: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
  },
  taskText: {
    fontSize: 16,
  },
  removeButton: {
    marginLeft: 10,
    padding: 5,
    backgroundColor: '#b30039',
    borderRadius: 5,
  },
  removeButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ToDoList;

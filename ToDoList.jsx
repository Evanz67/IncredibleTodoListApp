import React from 'react';
import { StyleSheet, Text, View, ScrollView, Pressable} from 'react-native';

export function ToDoList({ tasks }) {

    return (
        <ScrollView>
        <Pressable>
          <View style={styles.container}>
            {tasks.map((tasks) => {
              return (
                <View style={[styles.task, styles.incompleted]}>
                  <Text style={styles.taskText}>{tasks}</Text>
                </View>
              );
            })} 
          </View>
        </Pressable>
      </ScrollView>
    );
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  taskText: {
    fontSize: 16,
  },
  incomplete: {
    backgroundColor: 'ffffff',
  },
  container: {
    flex: 1,
    paddingTop: 26,
  }
});
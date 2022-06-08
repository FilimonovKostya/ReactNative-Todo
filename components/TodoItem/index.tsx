import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Checkbox from 'expo-checkbox'
import { TaskType } from '../../reducers/todoReducer'

type TodoItemProps = {
  tasks: TaskType[]
  changeStatusTask: (id: number, value: boolean) => void
}

const TodoItem = ({ tasks, changeStatusTask }: TodoItemProps) => {
  return (
    <View style={styles.container}>
      {tasks.map((task, index) => (
        <View key={task.id} style={styles.row}>
          <Checkbox
            value={task.isDone}
            onValueChange={(value) => changeStatusTask(task.id, value)}
          />
          <Text style={styles.text}>{task.title}</Text>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    marginTop: 60,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#cde1ff',
    borderRadius: 5,
    paddingVertical: 8,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  text: {
    color: '#2229b2',
    fontSize: 20,
    marginLeft: 10,
    fontWeight: 'bold',
  },
})

export default TodoItem

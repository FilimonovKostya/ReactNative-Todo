import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Checkbox from 'expo-checkbox'
import { removeTaskAC, TaskType } from '../../reducers/todoReducer'
import { useAppDispatch } from '../../store'

type TodoItemProps = {
  tasks: TaskType[]
  changeStatusTask: (id: number, value: boolean) => void
}

const TodoItem = ({ tasks, changeStatusTask }: TodoItemProps) => {
  const dispatch = useAppDispatch()
  const deleteTask = (id: number) => dispatch(removeTaskAC({ id }))

  return (
    <View style={styles.container}>
      {tasks.map((task) => (
        <View key={task.id} style={styles.row}>
          <Checkbox
            value={task.isDone}
            onValueChange={(value) => changeStatusTask(task.id, value)}
          />
          <Text style={styles.text}>{task.title}</Text>
          <TouchableOpacity style={styles.button} onPress={() => deleteTask(task.id)}>
            <Text style={styles.icon}>X</Text>
          </TouchableOpacity>
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
  button: {
    position: 'absolute',
    paddingVertical: 2,
    paddingHorizontal: 6,
    backgroundColor: '#ff1744',
    borderRadius: 5,
    right: 15,
  },
  icon: {
    fontSize: 18,
    color: 'white',
  },
})

export default TodoItem

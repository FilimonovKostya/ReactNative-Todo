import React from 'react'
import Checkbox from 'expo-checkbox'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { NativeBaseProvider } from 'native-base'

type TaskType = {
  id: number
  title: string
  isDone: boolean
}

export default function App() {
  const [tasks, setTasks] = React.useState<TaskType[]>([
    {
      id: 1,
      title: 'HTML',
      isDone: true,
    },
    {
      id: 2,
      title: 'CSS',
      isDone: false,
    },
    {
      id: 3,
      title: 'React Native',
      isDone: true,
    },
  ])
  const changeStatusTask = (id: number, isDone: boolean) => {
    const newStatusTask = tasks.map((task) => (task.id === id ? { ...task, isDone } : task))
    setTasks(newStatusTask)
  }

  return (
    <NativeBaseProvider>
      <StatusBar style='auto' />
      <View style={styles.container}>
        <View>
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
      </View>
    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#cde1ff',
    paddingVertical: 8,
    marginVertical: 10,
    paddingHorizontal:10,
  },
  text: {
    color: '#2229b2',
    fontSize: 20,
    marginLeft: 10,
    fontWeight: 'bold',
  },
})

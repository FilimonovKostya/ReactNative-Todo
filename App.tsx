import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { Checkbox, NativeBaseProvider } from 'native-base'

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
    const newStatusTask = tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            isDone,
          }
        : { ...task }
    )
    setTasks(newStatusTask)
  }

  return (
    <NativeBaseProvider>
      <StatusBar style='auto' />
      <View style={styles.container}>
        <View>
          {tasks.map((task, index) => (
            <View key={index}>
              <Text>{task.isDone}</Text>
              <Checkbox
                value={task.title}
                isChecked={task.isDone}
                onChange={(isSelected) => {
                  changeStatusTask(task.id, isSelected)
                }}
                accessibilityLabel='This is a dummy checkbox'
              >
                {task.title}
              </Checkbox>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
})

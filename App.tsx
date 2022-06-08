import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { Button, NativeBaseProvider } from 'native-base'

type TaskType = {
  id: number
  title: string
  isDone: boolean
}

export default function App() {
  const [tasks, setTasks] = React.useState<TaskType[]>([
    {
      id: 1,
      title: 'React',
      isDone: true,
    },
    {
      id: 2,
      title: 'React Native',
      isDone: false,
    },
    {
      id: 3,
      title: 'ApolloClient',
      isDone: false,
    },
    {
      id: 4,
      title: 'Redux',
      isDone: true,
    },
  ])

  return (
    <View style={styles.container}>
      {tasks.map((task, index) => (
        <View key={index}>
          <Text>{task.title}</Text>
          <Text>{task.isDone}</Text>
        </View>
      ))}
      <NativeBaseProvider>
        <Button onPress={() => console.log('hello world')}>Click Me</Button>
      </NativeBaseProvider>
      <StatusBar style='auto' />
    </View>
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

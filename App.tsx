import React from 'react'
import Checkbox from 'expo-checkbox'
import { StatusBar } from 'expo-status-bar'
import { Animated, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
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
  const animatedValue = React.useRef(new Animated.Value(0)).current
  const translateY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -80],
  })
  const [show, setShow] = React.useState(true)
  const [inputField, setInputField] = React.useState('')

  const changeStatusTask = (id: number, isDone: boolean) => {
    const newStatusTask = tasks.map((task) => (task.id === id ? { ...task, isDone } : task))
    setTasks(newStatusTask)
  }

  const startAnimated = (show: boolean) => {
    if (show) {
      Animated.timing(animatedValue, {

        toValue: 1,
        useNativeDriver: true,
      }).start()
    } else {
      Animated.timing(animatedValue, {
        toValue: 0,
        useNativeDriver: true,
      }).start()
    }
  }

  const close = () => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration:200,
      useNativeDriver: true,
    }).start()
  }

  const addTask = () => {
    const newTask: TaskType = { id: tasks.length + 1, isDone: false, title: inputField }

    setTasks([newTask, ...tasks])
    setInputField('')
    close()
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
      <Animated.View
        style={{ ...styles.containerAbsolute, bottom: -80, transform: [{ translateY }] }}
      >
        <View style={{ height: 40, alignItems: 'center', marginTop: 10 }}>
          <Text
            style={styles.separator}
            onPress={() => {
              setShow(!show)
              startAnimated(show)
            }}
          />
        </View>
        <View style={styles.inputBox}>
          <TextInput
            placeholder='enter your task'
            style={styles.input}
            value={inputField}
            onChangeText={setInputField}
          />
          <TouchableOpacity onPress={addTask}>
            <View style={styles.button}>
              <Text style={{ color: 'white', fontSize: 18 }}>Add</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </NativeBaseProvider>
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
  containerAbsolute: {
    position: 'absolute',
    backgroundColor: '#2279f1',
    width: '100%',
  },
  separator: {
    width: 170,
    height: 30,
    backgroundColor: 'white',
    overflow: 'hidden',
    borderRadius: 30 / 2,
  },
  inputBox: {
    height: 80,
    backgroundColor: '#2279f1',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    width: 200,
    height: 32,
    backgroundColor: 'white',
    fontSize: 18,
    borderRadius: 5,
    paddingHorizontal: 7,
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
})

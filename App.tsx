import React from 'react'
import Checkbox from 'expo-checkbox'
import { StatusBar } from 'expo-status-bar'
import { Animated, StyleSheet, Text, View } from 'react-native'
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
    outputRange: [0, -300],
  })
  const [show, setShow] = React.useState(true)

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
        <View style={{ height: 80, backgroundColor: '#a13ce3' }}>
          <Text>Input</Text>
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
    width: 100,
    height: 15,
    backgroundColor: 'white',
    overflow: 'hidden',
    borderRadius: 15 / 2,
  },
})

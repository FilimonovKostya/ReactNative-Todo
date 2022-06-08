import React from 'react'
import { Animated, StyleSheet } from 'react-native'
import { useAppDispatch, useAppSelector } from './store'
import { addTaskAC, changeStatusAC } from './reducers/todoReducer'
import TodoItem from './components/TodoItem'
import FieldGroup from './components/FieldGroup'
import Bar from './components/Bar'

const Main = () => {
  const [show, setShow] = React.useState(true)
  const [inputField, setInputField] = React.useState('')

  const tasks = useAppSelector((state) => state.reducer)
  const dispatch = useAppDispatch()

  const animatedValue = React.useRef(new Animated.Value(0)).current
  const translateY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -80],
  })

  const changeStatusTask = (id: number, isDone: boolean) => {
    dispatch(changeStatusAC({ id, isDone }))
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
      duration: 200,
      useNativeDriver: true,
    }).start()
  }

  const addTask = () => {
    dispatch(addTaskAC({ title: inputField }))
    setInputField('')
    close()
  }

  return (
    <>
      <TodoItem tasks={tasks} changeStatusTask={changeStatusTask} />
      <Animated.View
        style={{ ...styles.containerAbsolute, bottom: -80, transform: [{ translateY }] }}
      >
        <Bar setShow={setShow} show={show} startAnimated={startAnimated} />
        <FieldGroup inputField={inputField} setInputField={setInputField} addTask={addTask} />
      </Animated.View>
    </>
  )
}

const styles = StyleSheet.create({
  containerAbsolute: {
    position: 'absolute',
    backgroundColor: '#2279f1',
    width: '100%',
  },
})

export default Main

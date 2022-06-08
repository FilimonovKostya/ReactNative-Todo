import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

type FieldGroupProps = {
  inputField: string
  setInputField: (title: string) => void
  addTask: () => void
}

const FieldGroup = ({ inputField, setInputField, addTask }: FieldGroupProps) => {
  return (
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
  )
}

const styles = StyleSheet.create({
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

export default FieldGroup

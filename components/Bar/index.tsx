import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

type BarProps = {
  setShow: (value: boolean) => void
  startAnimated: (value: boolean) => void
  show: boolean
}

const Bar = ({ setShow, startAnimated, show }: BarProps) => {
  const onPressHandler = () => {
    setShow(!show)
    startAnimated(show)
  }

  return (
    <View style={{ height: 40, alignItems: 'center', marginTop: 10 }}>
      <Text style={styles.separator} onPress={onPressHandler} />
    </View>
  )
}

const styles = StyleSheet.create({
  separator: {
    width: 170,
    height: 30,
    backgroundColor: 'white',
    overflow: 'hidden',
    borderRadius: 30 / 2,
  },
})

export default Bar

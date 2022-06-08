import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

type BarProps = {
    setShow: (value: boolean) => void
    startAnimated: (value: boolean) => void
    show: boolean
}

const Bar = ({setShow, startAnimated, show}: BarProps) => {
    return (
        <View style={{height: 40, alignItems: 'center', marginTop: 10}}>
            <Text
                style={styles.separator}
                onPress={() => {
                    setShow(!show)
                    startAnimated(show)
                }}
            />
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

import React from 'react'
import {StatusBar} from 'expo-status-bar'
import {NativeBaseProvider} from 'native-base'
import {Provider} from 'react-redux'
import {store} from './store'
import Main from './Main'

export default function App() {
    return (
        <NativeBaseProvider>
            <StatusBar style='auto'/>
            <Provider store={store}>
                <Main/>
            </Provider>
        </NativeBaseProvider>
    )
}


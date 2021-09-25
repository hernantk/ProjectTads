import { NativeBaseProvider } from 'native-base'
import React from 'react'
import AppNavigation from './app/navigation/AppNavigation'

const App = () => {
    
    return (
        <NativeBaseProvider>
            <AppNavigation />
        </NativeBaseProvider>
    )
}

export default App;

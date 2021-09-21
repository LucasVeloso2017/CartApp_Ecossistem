
import React from 'react';
import { useFonts } from 'expo-font';
import Index from './src';
import { Text } from 'react-native';


const App: React.FC = () => {
    const [fontsLoaded] = useFonts({
        'OleoScript': require('./assets/fonts/OleoScript-Regular.ttf'),
    })

    if (!fontsLoaded) {
        return <Text>Loading fonts</Text>
    }

    return (
        <Index />
    )
}

export default App;

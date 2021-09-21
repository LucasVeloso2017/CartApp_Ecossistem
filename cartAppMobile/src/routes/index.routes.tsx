import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';

import Products from '../pages/Products';
import Cart from '../pages/Cart';


const Stack = createNativeStackNavigator()


const Routes: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator 
                screenOptions={{
                    headerShown:false
                }}
            >
                <Stack.Screen name="Products" component={Products}/>
                <Stack.Screen name="Cart" component={Cart}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;
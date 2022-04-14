import React from 'react'
import About from './About'
import Main from './MainContent'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

export default function Navigate() {
    return <NavigationContainer>
        <Stack.Navigator>
           <Stack.Screen name="Main" component = { Main } />
           <Stack.Screen name="About" component = { About } /> 
        </Stack.Navigator>
    </NavigationContainer>
}
/**
 * File: App.js
 * Author: David Hanley
 * Last modified: 2022-03-27
 */

import React, { useState } from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Calculator from './Calculator';
import SettingsScreen from './SettingsScreen';
import { darkTheme, lightTheme } from './themes/darkAndLight';
import { ThemeContext, VibrationContext } from './Context';

const Stack = createNativeStackNavigator();

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [vibration, setVibration] = useState(false);

  return (
    /**
     * This is the navigation stack of the main app. The ThemeContext and VibrationContext (imported from Context.js) 
     * containers allow the contexts of the darkMode and vibration useState hooks to be passed to all the children in the navigation.
     * This allows each component to be able to access this information.
     * The entire thing is wrapped in a view because it was the only way I could figure out how to remove a white flicker effect
     * when switching screens in dark mode.
     */
    <View style={{flex:1, backgroundColor: darkMode? '#09011B' : '#FEF5ED'}}>
      <ThemeContext.Provider value={{darkMode, setDarkMode}} >
        <StatusBar backgroundColor={darkMode? '#1B2642' : '#D3E4CD'} barStyle={!darkMode? 'dark-content' : 'light-content'}/>
          <VibrationContext.Provider value={{vibration, setVibration}}>
            <NavigationContainer theme={darkMode ? darkTheme : lightTheme} >
              <Stack.Navigator initialRouteName="Calculator" >
                <Stack.Screen options={{ headerShown: false }} name="Calculator" component={Calculator} />
                <Stack.Screen
                  name="Settings"
                  component={SettingsScreen}
                  options={{
                    headerStyle: { backgroundColor: darkMode? '#1B2642' : '#D3E4CD', },
                    headerTitleStyle: { fontWeight: 'bold', },
                  }} />
              </Stack.Navigator>
            </NavigationContainer>
          </VibrationContext.Provider>
      </ThemeContext.Provider>
    </View>
  );
};

export default App;

import React, { useState } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Calculator from './Calculator';
import SettingsScreen from './SettingsScreen';
import { darkTheme, lightTheme } from './themes/darkAndLight';
import { ThemeContext, VibrationContext } from './Context';

const Stack = createNativeStackNavigator();

//export const ThemeContext = React.createContext();

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [vibration, setVibration] = useState(false);
  return (
    <View style={{flex:1, backgroundColor: darkMode? '#09011B' : '#FEF5ED'}}>
      <ThemeContext.Provider value={{darkMode, setDarkMode}} >
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
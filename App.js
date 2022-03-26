
import React, { useState } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Calculator from './Calculator';
import SettingsScreen from './SettingsScreen';
import { darkTheme } from './themes/dark';
import { lightTheme } from './themes/light';

const Stack = createNativeStackNavigator();

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const themeData = { darkMode, setDarkMode };
  return (
    <View style={{flex:1, backgroundColor: darkMode? '#09011B' : '#FEF5ED'}}>
    <ThemeContext.Provider value={themeData} >
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
    </ThemeContext.Provider>
    </View>
  );
};
export const ThemeContext = React.createContext();
export default App;
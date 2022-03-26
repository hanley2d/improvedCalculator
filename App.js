
import React, { useState } from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme, useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Calculator from './Calculator';
import SettingsScreen from './SettingsScreen';
import { darkTheme } from './themes/dark';
import { lightTheme } from './themes/light';

const Stack = createNativeStackNavigator();

const App = () => {
  const { colors } = useTheme();
  const [darkMode, setDarkMode] = useState(false);
  const themeData = {darkMode, setDarkMode};
  return (
    <ThemeContext.Provider value={themeData}>
      <NavigationContainer theme={darkMode ? darkTheme : lightTheme}>
        <Stack.Navigator initialRouteName="Calculator">
          <Stack.Screen options={{ headerShown: false }} name="Calculator" component={Calculator} />
          <Stack.Screen name="Settings" component={SettingsScreen} options={{
            headerStyle: { backgroundColor: colors.screenView }, headerTintColor: colors.txtColor,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeContext.Provider>
  );
};
export const ThemeContext = React.createContext();
export default App;
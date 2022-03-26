
import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Calculator from './Calculator';
import SettingsScreen from './SettingsScreen';
import { Colors } from './colors';

const Stack = createNativeStackNavigator();


const App = () => {

  return (
    <View style={{ flex: 1, backgroundColor: Colors.BG }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Calculator" >
          <Stack.Screen options={{ headerShown: false }} name="Calculator" component={Calculator} />
          <Stack.Screen name="Settings" component={SettingsScreen} options={{
            headerStyle: { backgroundColor: Colors.screenView }, headerTintColor: Colors.textColor,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default App;
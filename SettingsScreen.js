/**
 * File: SettingsScreen.js
 * Author: David Hanley
 * Last Modified
 */
import { useTheme } from '@react-navigation/native';
import React, { useContext } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { ThemeContext, VibrationContext } from './Context';

const SettingsScreen = ({ navigation }) => {
    // import colours for the current theme which is determined in the NavigationContainer in App.js
    const { colors } = useTheme();
    // these values are imported from Context.js. 
    // This can be done because they were passed into the context providers in App.js
    const { darkMode, setDarkMode } = useContext(ThemeContext);
    const { vibration, setVibration } = useContext(VibrationContext);

    const toggleTheme = (value) => {
        setDarkMode(value);
      };
    const toggleVibration = (value) => {
        setVibration(value);
    }

    const styles = StyleSheet.create({
        settingsContainer: {
            flex: 1,
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.background,
            color: colors.txtColor,
        },
        text: {
            fontSize: 25,
            color: colors.txtColor,
        },
    });
    return (
        <View style={styles.settingsContainer}>
            <Text style={styles.text}>{darkMode ? "Dark Mode" : "Light Mode"}</Text>
            <Switch 
                trackColor={{ false: "#767577", true: "#81b0ff" }} 
                thumbColor={darkMode ? "#B5CDA3" : "#FF8080" } 
                onValueChange={(s) => {
                    toggleTheme(s);
                }} value={darkMode} />
            <Text style={styles.text}>{vibration? 'Vibration Mode On' : 'Vibration Mode Off'}</Text>
            <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }} 
                thumbColor={vibration ? "#B5CDA3" : "#FF8080"} 
                onValueChange={(s) => {
                    toggleVibration(s);
                }} value={vibration} />
        </View>
    )
}

export default SettingsScreen;
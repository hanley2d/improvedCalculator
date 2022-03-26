import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { ThemeContext } from './App';

const SettingsScreen = ({ navigation }) => {
    
    const { colors } = useTheme();
    const {setDarkMode, darkMode} = React.useContext(ThemeContext);
    
    // const toggleDarkMode = (value) => {
    //     setDarkMode(value);
    // }     
    // const checkDarkMode = (darkMode) => {
    //     if (!darkMode) {
           
    //     }         
    // };   
    const styles = StyleSheet.create({
        settingsContainer: {
            flex: 1,
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.background,
            color: colors.txtColor,
          }
    });
    return (
        <View style={styles.settingsContainer}>
            <Text style={{ color: colors.txtColor }}>{darkMode ? "Dark Mode" : "Light Mode"}</Text>
            <Switch onValueChange={(s) => {
                // checkDarkMode(s);
                //toggleDarkMode(s);
                setDarkMode(s);
            }}value={darkMode} />
            <Text style={{ color: colors.txtColor }}>Vibration Mode</Text>
            <Switch />
        </View>
    )
}

export default SettingsScreen;
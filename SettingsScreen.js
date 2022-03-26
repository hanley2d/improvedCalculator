import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { Colors } from './colors';

const SettingsScreen = ({ navigation }) => {
    const [darkMode, setDarkMode] = useState(true);
    const toggleDarkMode = (value) => {
        setDarkMode(value);
    }     
    const checkDarkMode = (darkMode) => {
        if (!darkMode) {
            Colors.BG = '#FEF5ED';
            Colors.screenView = '#D3E4CD';
            Colors.textColor = '#000';
        } else {
            Colors.BG = '#09011B';
            Colors.screenView = '#1B2642';
            Colors.textColor = '#fff';
        }
        console.log(Colors.BG);
    };   
    return (
        <View style={styles.settingsContainer}>
            <Text style={{ color: Colors.textColor }}>{darkMode ? "Dark Mode" : "Light Mode"}</Text>
            <Switch onValueChange={(s) => {
                checkDarkMode(s);
                toggleDarkMode(s);
            }} value={darkMode} />
            <Text style={{ color: Colors.textColor }}>Vibration Mode</Text>
            <Switch />
        </View>
    )
}
const styles = StyleSheet.create({
    settingsContainer: {
        flex: 1,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.BG,
        color: Colors.textColor,
      }
})
export default SettingsScreen;
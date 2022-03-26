import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { ThemeContext } from './App';

const SettingsScreen = ({ navigation }) => {

    const { colors } = useTheme();
    const { darkMode, setDarkMode } = React.useContext(ThemeContext);

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
            <Switch trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={"#d3e4cd"} onValueChange={(s) => {
                    setDarkMode(s);
                }} value={darkMode} />
            <Text style={styles.text}>Vibration Mode</Text>
            <Switch />
        </View>
    )
}

export default SettingsScreen;
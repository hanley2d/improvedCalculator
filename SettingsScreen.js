import { useTheme } from '@react-navigation/native';
import React, { useContext } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { ThemeContext, VibrationContext } from './Context';

const SettingsScreen = ({ navigation }) => {

    const { colors } = useTheme();
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
                thumbColor={"#d3e4cd"} 
                onValueChange={(s) => {
                    toggleTheme(s);
                }} value={darkMode} />
            <Text style={styles.text}>{vibration? 'Vibration Mode On' : 'Vibration Mode Off'}</Text>
            <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }} 
                thumbColor={"#d3e4cd"} 
                onValueChange={(s) => {
                    toggleVibration(s);
                }} value={vibration} />
        </View>
    )
}

export default SettingsScreen;
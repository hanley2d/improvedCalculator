/**
 * File: darkAndLight.js
 * Author: David Hanley
 * Last modified: 2022-03-27
 * 
 * This file contains the color profiles for the light and dark themes.
 * They are added onto the DarkTheme and DefaultTheme components which can be imported from React Navigation. 
 * The colours of the desired theme can be imported into other component using the useTheme() hook.
 * https://reactnavigation.org/docs/themes/
 *  
 * The idea of how to implement the themes and add custom colours came from this github repository: 
 * https://github.com/bithoven-dev/ReactNavigationAuthenticationFlowsWithHooks
 */

import { DarkTheme, DefaultTheme } from "@react-navigation/native";

export const darkTheme = {
    ...DarkTheme,
    colors: {
        ...DarkTheme.colors,
        background: '#09011B',
        screenView: '#1B2642',
        txtColor: '#fff',
    }
}
export const lightTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: '#FEF5ED',
        screenView: '#D3E4CD',
        txtColor: '#000',
    }
}
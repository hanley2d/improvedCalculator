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
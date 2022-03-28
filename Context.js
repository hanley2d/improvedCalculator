/**
 * This file contains the contexts for the theme and vibration values. 
 * This way the useState hooks can be passed between components while maintaining the state.
 * ThemeContext and VibrationContext must be placed in the App.js file with the value of their respective hooks.
 * This way the children components can inherit the state.
 */

import { createContext } from 'react';

export const ThemeContext = createContext();

export const VibrationContext = createContext();



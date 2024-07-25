import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#0a3045',
            light: '#c2c6cf',
            dark: '#0b2641',
        },
        secondary: {
            main: '#275af4',
            light: '#90acff',
            dark: '#10276f',
        },
        success: {
            main: '#297d2d',
            light: '#4e9652',
            dark: '#114a13',
        },
        warning: {
            main: '#ffc55a',
            light: '#f7c94a',
            dark: '#a37c00',
        },
        info: {
            main: '#2d6a9d',
            light: '#7db1dc',
            dark: '#0f3c5c',
        },
        text: {
            primary: '#000000',
            secondary: '#000000',
        },
        divider: '#0000001e',
        background: {
            default: '#d2d8e4',
        },
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#abc1ff',
            light: '#0b2641',
            dark: '#2d6a9d',
        },
        secondary: {
            main: '#297d2d',
            light: '#275af4',
            dark: '#2d6a9d',
        },
        success: {
            main: '#4a8abf',
            light: '#90acff',
            dark: '#4a8abf',
        },
        warning: {
            main: '#4a8abf',
            light: '#4a8abf',
            dark: '#4a8abf',
        },
        info: {
            main: '#90acff',
            light: '#182f75',
            dark: '#4a8abf',
        },
        text: {
            primary: '#e9eeff',
            secondary: '#e4ebff',
        },
        divider: '#747b8e',
        background: {
            default: '#121212d6',
        },
    },
});

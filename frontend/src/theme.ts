import {createTheme} from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        primary: {
            light: '#534bae',
            main: '#1a237e',
            dark: '#000051',
            contrastText: '#ffffff',
        },
        secondary: {
            light: '#ffa4a2',
            main: '#e57373',
            dark: '#af4448',
            contrastText: '#000000',
        },
        background: {
            default: "#202444"
        },
        text: {
            primary: "#ffffff"
        },
    },
});
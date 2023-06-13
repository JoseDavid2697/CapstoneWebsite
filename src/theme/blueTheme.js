import {createTheme} from "@mui/material";
import { red } from "@mui/material/colors"

export const blueTheme = createTheme({
    palette: {
        primary: {
            main: '#0892d0'
        },
        secondary: {
            main: '#73C2FB'
        },
        error: {
            main: red.A400
        }
    }
})
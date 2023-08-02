import { createTheme } from '@mui/material'
import { red, blueGrey } from '@mui/material/colors'

const theme = createTheme({
	palette: {
		primary: {
			main: blueGrey[700],
		},
		secondary: {
			main: red[400],
		},
		error: {
			main: red.A400,
		},
	},
})

export default theme

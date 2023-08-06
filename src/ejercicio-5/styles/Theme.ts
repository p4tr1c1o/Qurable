import { createTheme } from '@mui/material'
import { teal, blueGrey } from '@mui/material/colors'


let theme = createTheme({
	palette: {
		primary: blueGrey,
		secondary: { main: teal[500] }
	},
	typography: {
		h1: {
			color: "#101f33"
		},
		h5: {
			fontWeight: 500,
			fontSize: 26,
			letterSpacing: 0.5,
		},
	},
	shape: {
		borderRadius: 8,
	},
	mixins: {
		toolbar: {
			minHeight: 48,
		},
	},
})

theme = {
	...theme,
	components: {
		MuiCardHeader: {
			styleOverrides: {
				root: {
					backgroundColor: theme.palette.secondary.main,
					color: "white",
					height: 100,
					alignItems: "flex-end"
				}
			}
		},
		MuiButton: {
			styleOverrides: {
				root: {
					textTransform: 'none',
				},
				contained: {
					color: "white",
					boxShadow: 'none',
					'&:active': {
						boxShadow: 'none',
					},
				},
			},
		},
		MuiIconButton: {
			styleOverrides: {
				root: {
					padding: theme.spacing(1),
				},
			},
		},
		MuiDivider: {
			styleOverrides: {
				root: {
					backgroundColor: 'rgb(255,255,255,0.15)',
				},
			},
		},
		MuiAvatar: {
			styleOverrides: {
				root: {
					width: 32,
					height: 32,
				},
			},
		},
	},
}

export default theme

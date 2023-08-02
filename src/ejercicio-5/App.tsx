import { ThemeProvider } from "@mui/material/styles"
import MainRouter from "./routers/MainRouter"
import theme from "./styles/Theme"
import { CssBaseline } from "@mui/material"

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<MainRouter />
		</ThemeProvider>
	)
}

export default App

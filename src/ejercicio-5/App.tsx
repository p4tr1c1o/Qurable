import { ThemeProvider } from "@mui/material/styles"
import MainRouter from "./routers/MainRouter"
import theme from "./styles/Theme"
import { CssBaseline } from "@mui/material"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import 'dayjs/locale/es-mx'

function App() {
	return (
		<LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es-mx">
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<MainRouter />
			</ThemeProvider>
		</LocalizationProvider>
	)
}

export default App

import { ThemeProvider } from "@mui/material/styles"
import MainRouter from "./routers/MainRouter"
import theme from "./styles/Theme"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import 'dayjs/locale/es-mx'
import AuthProvider from "./context/AuthContext"

function App() {
	return (
		<LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es-mx">
			<ThemeProvider theme={theme}>
				<AuthProvider>
					<MainRouter />
				</AuthProvider>
			</ThemeProvider>
		</LocalizationProvider>
	)
}

export default App

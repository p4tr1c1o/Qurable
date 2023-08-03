import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { ReactComponent as Calendar } from "../../../../public/calendar.svg"
import theme from "../../styles/Theme"
function EventDetail() {
	const navigate = useNavigate()

	function handleVolverClick() {
		navigate("/")
	}
	function handleAsistireClick() {
		return
	}


	return (
		<Card sx={{ maxWidth: 700, margin: "auto" }}>
			<CardHeader
				title="Evento"
				sx={{
					backgroundColor: theme.palette.secondary.main,
					color: "white",
					height: 100,
					alignItems: "flex-end"
				}}
				titleTypographyProps={{}}
			/>

			<CardContent sx={{ height: 200 }}>contenido</CardContent>
			<CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
				<Button color="secondary" onClick={handleVolverClick}>Volver</Button>
				<Button color="secondary" variant="contained">Asistire!</Button>
			</CardActions>
		</Card >
	)
}

export default EventDetail
import { Button, Card, CardActions, CardContent, CardHeader } from "@mui/material"
import { useNavigate } from "react-router-dom"


function EventDetail() {
	const navigate = useNavigate()

	function handleVolverClick() {
		navigate("/")
	}
	function handleAsistireClick() {
		return
	}


	return (
		<Card >
			<CardHeader title="Evento" />
			<CardContent>contenido</CardContent>
			<CardActions>
				<Button onClick={handleVolverClick}>Volver</Button>
				<Button variant="contained">Asistire!</Button>
			</CardActions>
		</Card>
	)
}

export default EventDetail
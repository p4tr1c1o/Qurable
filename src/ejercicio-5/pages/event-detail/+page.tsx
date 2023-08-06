import { Button, Card, CardActions, CardContent, CardHeader, Container } from "@mui/material"
import { useNavigate } from "react-router-dom"
import theme from "../../styles/Theme"
import StyledCard from "../../components/StyledCard"
import StyledContainer from "../../components/StyledContainer"
function EventDetail() {
	const navigate = useNavigate()
	// const url = ""
	// const { data: peliculaDestacada } = useFetch(url)


	function handleVolverClick() {
		navigate("/")
	}
	function handleAsistireClick() {
		return
	}


	return (
		<StyledContainer >
			<StyledCard >
				<CardHeader
					title="Evento"
					sx={{
						backgroundColor: theme.palette.secondary.main,
						color: "white",
						height: 100,
						alignItems: "flex-end"
					}}
				/>

				<CardContent sx={{ height: 200 }}>contenido</CardContent>
				<CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
					<Button color="secondary" onClick={handleVolverClick}>Volver</Button>
					<Button color="secondary" variant="contained" onClick={handleAsistireClick}>Asistire!</Button>
				</CardActions>
			</StyledCard >
		</StyledContainer>
	)
}

export default EventDetail
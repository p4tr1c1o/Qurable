import { Box, Button, CardActions, CardContent, CardHeader, CircularProgress, Container, List, ListItem, ListItemText } from "@mui/material"
import { useLocation, useNavigate } from "react-router-dom"
import StyledCard from "../../components/StyledCard"
import StyledContainer from "../../components/StyledContainer"
import { useFetch } from "../../hooks/useFetch"
import Evento from "../../models/Evento"
import LoadingButton from '@mui/lab/LoadingButton'
import { User } from "firebase/auth"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../context/AuthContext"
import EventsService from "../../services/EventsService"

function EventDetail() {
	const navigate = useNavigate()
	const { state } = useLocation()
	const usuarioActual = useContext<User | null>(AuthContext)
	const [posting, setPosting] = useState(false)
	const [asistire, setAsistire] = useState(false)

	const { id: docId } = state
	if (!docId) throw new Error("Missing param ID")

	const url = `${import.meta.env.VITE_API_BASE_URL}/events?${new URLSearchParams({ id: docId })}`
	const { data, loading } = useFetch<Evento>(url, undefined, (result) => new Evento(result))



	useEffect(() => {
		if (data?.asistentes) {
			setAsistire(data?.asistentes?.includes(usuarioActual?.uid ?? ""))
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data?.asistentes])


	function handleVolverClick() {
		navigate("/")
	}

	async function handleAsistireClick() {
		if (usuarioActual && data?.docId) {
			setPosting(true)
			const result = await EventsService.postAsistire(data?.docId, usuarioActual.uid)
			setPosting(false)

			if (result?.ok) setAsistire(true)
			return
		} else {
			navigate("/signin-side")
		}

		return
	}


	return (
		<StyledContainer>
			<StyledCard>
				<CardHeader title="Evento" />

				<CardContent sx={{ height: 200 }}>
					{loading && (
						<Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
							<CircularProgress />
						</Box>
					)}

					{data &&
						(<List >
							<ListItem >
								<ListItemText primary={"Nombre: "} sx={{ maxWidth: 120 }} />
								<ListItemText secondary={data?.nombre} />
							</ListItem>
							<ListItem >
								<ListItemText primary={"Descripcion: "} sx={{ maxWidth: 120 }} />
								<ListItemText secondary={data?.descripcion} />
							</ListItem>
							<ListItem >
								<ListItemText primary={"Fecha: "} sx={{ maxWidth: 120 }} />
								<ListItemText secondary={data?.fecha.toLocaleString("es-AR")} />
							</ListItem>
						</List>)
					}
				</CardContent>

				<CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
					<Button color="secondary" onClick={handleVolverClick}>Volver</Button>
					<LoadingButton
						color="secondary"
						loading={posting}
						variant="contained"
						onClick={handleAsistireClick}
						disabled={Boolean(!data) || asistire}
					>
						Asistire!
					</LoadingButton>
				</CardActions>
			</StyledCard >
		</StyledContainer>
	)
}

export default EventDetail


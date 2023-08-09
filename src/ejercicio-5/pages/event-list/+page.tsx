import SearchToolbar from "./SearchToolbar"
import { DataGrid, GridColDef, GridRowModel } from "@mui/x-data-grid"
import { collection } from "firebase/firestore"
import { firestore } from "../../firebase/firebase.config"
import { eventoConverter } from "../../models/Evento"
import ActionButtonsCell from "./ActionButtonsCell"
import NoRowsPlaceholder from "./NoRowsPlaceholder"
import StyledCard from "../../components/StyledCard"
import StyledContainer from "../../components/StyledContainer"
import { useStream } from "../../hooks/useStream"

const eventosRef = collection(firestore, "eventos").withConverter(eventoConverter)

function EventList() {
	const { data, loading } = useStream(eventosRef)

	const rows = data?.map(evento => ({
		id: evento?.docId,
		nombre: evento?.nombre,
		descripcion: evento?.descripcion,
		fecha: evento?.fecha.toLocaleDateString()
	})) ?? [] as GridRowModel[]

	const columns: GridColDef[] = [
		{ field: "id", headerName: "Id", width: 100 },
		{ field: "nombre", headerName: "Nombre", width: 140 },
		{ field: "descripcion", headerName: "Descripcion", flex: 1, minWidth: 160 },
		{ field: "fecha", headerName: "Fecha", width: 130 },
		{ field: "actions", headerName: " ", width: 100, renderCell: ActionButtonsCell },
	]

	return (
		<StyledContainer>

			<StyledCard>
				<SearchToolbar />

				<DataGrid
					loading={loading}
					rows={rows}
					columns={columns}
					columnVisibilityModel={{
						id: false
					}}
					slots={{ noRowsOverlay: NoRowsPlaceholder }}
					sx={{ border: "none" }}
					autoHeight
					hideFooter
				/>
			</StyledCard>
		</StyledContainer >
	)
}

export default EventList
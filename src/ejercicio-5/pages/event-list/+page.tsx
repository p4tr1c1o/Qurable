import Paper from '@mui/material/Paper'
import SearchToolbar from "./SearchToolbar"
import { DataGrid, GridColDef, GridRowModel } from "@mui/x-data-grid"
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { collection } from "firebase/firestore"
import { firestore } from "../../firebase/firebase.config"
import { eventoConverter } from "../../models/Evento"
import ActionButtonsCell from "./ActionButtonsCell"
import NoRowsPlaceholder from "./NoRowsPlaceholder"

const eventosRef = collection(firestore, "eventos").withConverter(eventoConverter)

function EventList() {
	const [values, loading] = useCollectionData(eventosRef)

	const rows = values?.map(evento => ({
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
		{ field: "actions", headerName: " ", width: 100, renderCell: (params) => ActionButtonsCell(params) },
	]

	return (
		<Paper sx={{ maxWidth: { xs: 320, sm: 936 }, minHeight: 160, margin: 'auto', overflowX: "hidden" }}>
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
		</Paper>
	)
}

export default EventList
import { Button } from "@mui/material"
import { GridRenderCellParams, GridRowModel } from "@mui/x-data-grid"
import { useNavigate } from "react-router-dom"
import Evento from "../../models/Evento"


function ActionButtonsCell(params: GridRenderCellParams) {
	const navigate = useNavigate()

	function handleEditarClick(params: GridRowModel<Evento>) {
		// setRow(valuesProductos?.find(x => x.docId == row?.id))
		// // setRow(new Producto())
		// setOpenDialog(true)

		navigate(`/events/${params?.docId}`)
	}

	return (
		<Button
			color="secondary"
			size="small"
			style={{ marginLeft: 16 }}
			onClick={() => handleEditarClick(params.row)}
		>
			Detalles
		</Button>
	)
}

export default ActionButtonsCell
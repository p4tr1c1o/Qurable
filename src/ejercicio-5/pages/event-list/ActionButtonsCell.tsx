import { Button } from "@mui/material"
import { GridRenderCellParams, GridRowModel } from "@mui/x-data-grid"
import { useNavigate } from "react-router-dom"


function ActionButtonsCell(params: GridRenderCellParams) {
	const navigate = useNavigate()

	function handleEditarClick(params: GridRowModel) {
		// setRow(valuesProductos?.find(x => x.docId == row?.id))
		// // setRow(new Producto())
		// setOpenDialog(true)
		navigate(`/events/${params.row}`)
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
import { Button } from "@mui/material"
import { GridRenderCellParams } from "@mui/x-data-grid"
import { useNavigate } from "react-router-dom"

function ActionButtonsCell(params: GridRenderCellParams) {
	const navigate = useNavigate()
	if (!params.id) throw new Error("Missing param ID")

	function handleEditarClick(params: GridRenderCellParams) {
		navigate("events/detail", { state: { id: params.id } })
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
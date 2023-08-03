import { Typography } from "@mui/material"


function NoRowsPlaceholder() {
	return (
		<Typography sx={{ my: 5, mx: 2 }} color="text.secondary" align="center">
			Aun no hay eventos registrados.
		</Typography>
	)
}

export default NoRowsPlaceholder
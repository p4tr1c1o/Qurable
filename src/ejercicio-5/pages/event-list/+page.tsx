import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import SearchToolbar from "./SearchToolbar"

function EventList() {

	return (
		<Paper sx={{ maxWidth: 936, margin: 'auto', overflow: 'hidden' }}>
			<SearchToolbar />
			<Typography sx={{ my: 5, mx: 2 }} color="text.secondary" align="center">
				No users for this project yet
			</Typography>
		</Paper>
	)
}

export default EventList
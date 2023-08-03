import { AppBar, TextField, Button, Toolbar } from "@mui/material"
import Grid from "@mui/material/Grid"
import { useNavigate } from "react-router-dom"
import SearchIcon from '@mui/icons-material/Search'

function SearchToolbar() {
	const navigate = useNavigate()

	function handleAddEventClick() {
		navigate("/events/form")
	}

	return (
		<AppBar
			position="static"
			color="default"
			elevation={0}
			sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
		>
			<Toolbar disableGutters>
				<Grid container spacing={2} alignItems="center" justifyContent="flex-end">
					<Grid item>
						<SearchIcon color="inherit" sx={{ display: 'block', marginLeft: 1 }} />
					</Grid>
					<Grid item xs>
						<TextField
							fullWidth
							placeholder="Search by email address, phone number, or user UID"
							InputProps={{
								disableUnderline: true,
								sx: { fontSize: 'default' },
							}}
							variant="standard"
						/>
					</Grid>
					<Grid item>
						<Button color="secondary" variant="contained" sx={{ mr: 1 }} onClick={handleAddEventClick}>
							Add event
						</Button>
						{/* <Tooltip title="Reload">
								<IconButton>
									<RefreshIcon color="inherit" sx={{ display: 'block' }} />
								</IconButton>
							</Tooltip> */}
					</Grid>
				</Grid>
			</Toolbar>
		</AppBar>
	)
}

export default SearchToolbar
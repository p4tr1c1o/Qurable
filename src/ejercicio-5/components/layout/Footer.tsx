import { Link, Box, Typography } from "@mui/material"

function Footer() {
	return (
		<Box component="footer" sx={{ p: 2, bgcolor: '#eaeff1' }}>
			<Typography variant="body2" color="text.secondary" align="center">
				{'Copyright © '}
				<Link color="inherit" href="https://mui.com/">
					Your Website
				</Link>{' '}
				{new Date().getFullYear()}.
			</Typography>
		</Box>)
}

export default Footer
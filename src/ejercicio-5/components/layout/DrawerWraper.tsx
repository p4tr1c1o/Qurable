import { Box, useMediaQuery } from "@mui/material"
import Navigator from './Navigator'
import theme from "../../styles/Theme"


export const drawerWidth = 256

function DrawerWraper({ mobileOpen, toggleDrawer }) {
	const isSmUp = useMediaQuery(theme.breakpoints.up('sm'))

	return (
		<Box
			component="nav"
			sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
		>
			{isSmUp ? null : (
				<Navigator
					PaperProps={{ style: { width: drawerWidth } }}
					variant="temporary"
					open={mobileOpen}
					onClose={toggleDrawer}
				/>
			)}
			<Navigator
				PaperProps={{ style: { width: drawerWidth } }}
				sx={{ display: { sm: 'block', xs: 'none' } }}
			/>
		</Box>
	)
}

export default DrawerWraper
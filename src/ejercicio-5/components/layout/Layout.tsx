import * as React from 'react'
import Box from '@mui/material/Box'
// import { mainListItems, secondaryListItems } from './listItems'
import { Outlet } from "react-router-dom"
import Drawer from "./Drawer"
import AppBar from "./AppBar"

export default function Layout() {
	const [open, setOpen] = React.useState(true)
	const toggleDrawer = () => {
		setOpen(!open)
	}

	return (
		<Box sx={{ display: 'flex' }}>
			<AppBar open={open} toggleDrawer={toggleDrawer} />
			<Drawer open={open} toggleDrawer={toggleDrawer} />

			<Box component="main"
				sx={{
					backgroundColor: (theme) =>
						theme.palette.mode === 'light'
							? theme.palette.grey[100]
							: theme.palette.grey[900],
					flexGrow: 1,
					height: '100vh',
					overflow: 'auto',
				}}
			>
				<Outlet />
			</Box>
		</Box>

	)
}

import * as React from 'react'
import Box from '@mui/material/Box'
import Header from './Header'
import DrawerWraper from "./DrawerWraper"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"



export default function Layout() {
	const [mobileOpen, setMobileOpen] = React.useState(false)

	const toggleDrawer = () => {
		setMobileOpen(!mobileOpen)
	}

	return (
		<Box sx={{ display: 'flex', minHeight: '100vh' }}>

			<DrawerWraper mobileOpen={mobileOpen} toggleDrawer={toggleDrawer} />

			<Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
				<Header onDrawerToggle={toggleDrawer} />
				<Box component="main" sx={{ flex: 1, py: 6, px: 4, bgcolor: '#eaeff1' }}>
					<Outlet />
				</Box>
				<Footer />
			</Box>
		</Box>
	)
}

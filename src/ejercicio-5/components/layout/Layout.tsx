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
		<>
			<Header onDrawerToggle={toggleDrawer} />
			<Box sx={{ display: 'flex', minHeight: '100vh', overflowX: "scroll" }}>


				<Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
					<Box component="main" sx={{
						flex: 1,
						paddingY: 6,
						paddingX: { xs: 1, sm: 4 },
						bgcolor: '#eaeff1'
					}}>
						<DrawerWraper mobileOpen={mobileOpen} toggleDrawer={toggleDrawer} />
						<Outlet />
					</Box>
					<Footer />
				</Box>
			</Box>
		</>
	)
}

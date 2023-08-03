import * as React from "react"
import useMediaQuery from "@mui/material/useMediaQuery"
import Box from "@mui/material/Box"
import Footer from "./Footer"
import DrawerHandler from "./DrawerHandler"
import { Outlet } from "react-router-dom"
import Header from "./Header"
import { CssBaseline } from "@mui/material"
import theme from "../../styles/Theme"

export default function Layout() {
	const [mobileOpen, setMobileOpen] = React.useState(false)
	const isMeddium = useMediaQuery(theme.breakpoints.up("md"))

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen)
	}

	const styles = {
		layout: {
			display: "flex",
			minHeight: "100vh",
			bgcolor: "#eaeff1"
		},
		main: {
			flex: 1,
			display: "flex",
			flexDirection: "column",
		},
		outletWrapper: {
			flex: 1,
			paddingY: 6,
			paddingX: { xs: 2, sm: 4 },
			bgcolor: '#eaeff1'
		}
	} as const

	return (
		<>
			<CssBaseline />
			<Box sx={styles.layout}>
				<DrawerHandler
					isMdUp={isMeddium}
					mobileOpen={mobileOpen}
					handleDrawerToggle={handleDrawerToggle}
				/>
				<Box component="main" sx={styles.main}>
					<Header onDrawerToggle={handleDrawerToggle} />
					<Box sx={styles.outletWrapper}>
						<Outlet />
					</Box>
					<Footer />
				</Box>
			</Box >
		</ >
	)
}

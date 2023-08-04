import { useContext } from 'react'
import AppBar from '@mui/material/AppBar'
import Avatar from '@mui/material/Avatar'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import NotificationsIcon from '@mui/icons-material/Notifications'
import Toolbar from '@mui/material/Toolbar'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import { AuthContext } from "../../context/AuthContext"
import AccountMenu from "./AccountMenu"
import * as React from "react"

interface HeaderProps {
	onDrawerToggle: () => void;
}

export default function Header(props: HeaderProps) {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>()
	const openAccountMenu = Boolean(anchorEl)
	const usuarioActual = useContext(AuthContext)

	function handleAccountMenuClick(event: React.MouseEvent<HTMLElement>) {
		setAnchorEl(event.currentTarget)
	}

	function handleCloseAccountMenu() {
		setAnchorEl(null)
	}
	const { onDrawerToggle } = props

	return (
		<React.Fragment>
			<AppBar color="transparent" position="sticky" elevation={0}>
				<Toolbar>
					<Grid container spacing={1} alignItems="center">
						<Grid sx={{ display: { md: 'none', sm: 'block' } }} item>
							<IconButton
								color="inherit"
								aria-label="open drawer"
								onClick={onDrawerToggle}
								edge="start"
							>
								<MenuIcon />
							</IconButton>
						</Grid>
						<Grid item xs />
						<Grid item>
							<Tooltip title="Alerts • No alerts">
								<IconButton color="inherit">
									<NotificationsIcon />
								</IconButton>
							</Tooltip>
						</Grid>
						<Grid item>
							<IconButton color="inherit" sx={{ p: 0.5 }} onClick={handleAccountMenuClick} >
								<Avatar>{usuarioActual?.email?.charAt(0)}</Avatar>
							</IconButton>
							<AccountMenu open={openAccountMenu} anchorEl={anchorEl} handleClose={handleCloseAccountMenu} />
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
			<AppBar
				component="div"
				color="transparent"
				position="static"
				elevation={0}
				sx={{
					zIndex: 0,
					paddingBottom: 2,
					borderBottom: 1,
					borderBottomColor: "#08162745"
				}}
			>
				<Toolbar>
					<Grid container alignItems="center" spacing={1}>
						<Grid item xs>
							<Typography color="inherit" variant="h5" component="h1">
								Gestion de Eventos
							</Typography>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>

		</React.Fragment >
	)
}

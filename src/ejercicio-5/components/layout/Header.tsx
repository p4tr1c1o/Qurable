import * as React from "react"
import { useContext } from 'react'
import AppBar from '@mui/material/AppBar'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { AuthContext } from "../../context/AuthContext"
import AccountMenu from "./AccountMenu"
import { Box } from "@mui/material"


export default function Header() {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>()
	const openAccountMenu = Boolean(anchorEl)
	const usuarioActual = useContext(AuthContext)

	function handleAccountMenuClick(event: React.MouseEvent<HTMLElement>) {
		setAnchorEl(event.currentTarget)
	}

	function handleCloseAccountMenu() {
		setAnchorEl(null)
	}

	return (
		<AppBar position="sticky">
			<Toolbar>

				<img src="/logo.png" alt="image" />
				<Typography variant="h6" sx={{ flexGrow: 1, marginInline: 2 }}>
					Gestion de Eventos
				</Typography>

				<Box>
					<IconButton color="inherit" sx={{ padding: 0.5 }} onClick={handleAccountMenuClick} >
						<Avatar>{usuarioActual?.email?.charAt(0).toUpperCase()}</Avatar>
					</IconButton>
					<AccountMenu open={openAccountMenu} anchorEl={anchorEl} handleClose={handleCloseAccountMenu} />
				</Box>
			</Toolbar>
		</AppBar>
	)
}

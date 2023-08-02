import React from 'react'
import { styled } from "@mui/material/styles"
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import { drawerWidth } from "./Drawer"
import { Toolbar, IconButton, Typography, Badge } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'
import NotificationsIcon from '@mui/icons-material/Notifications'




function AppBar({ open, toggleDrawer }) {
	return (
		<StyledAppBar position="absolute" open={open}>
			<Toolbar sx={{ paddingRight: '24px' }}				>
				<IconButton
					edge="start"
					color="inherit"
					aria-label="open drawer"
					onClick={toggleDrawer}
					sx={{
						marginRight: '36px',
						...(open && { display: 'none' }),
					}}
				>
					<MenuIcon />
				</IconButton>
				<Typography
					component="h1"
					variant="h6"
					color="inherit"
					noWrap
					sx={{ flexGrow: 1 }}
				>
					Dashboard
				</Typography>
				<IconButton color="inherit">
					<Badge badgeContent={4} color="secondary">
						<NotificationsIcon />
					</Badge>
				</IconButton>
			</Toolbar>
		</StyledAppBar>
	)
}

type AppBarProps = {
	open?: boolean;
}

const StyledAppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
	zIndex: theme.zIndex.drawer + 1,
	transition: theme.transitions.create(['width', 'margin'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}))

export default AppBar
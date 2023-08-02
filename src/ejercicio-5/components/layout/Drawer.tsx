import React from 'react'
import { styled } from "@mui/material/styles"
import MuiDrawer from '@mui/material/Drawer'
import { Toolbar, IconButton, Divider, List } from "@mui/material"
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'


export const drawerWidth: number = 240


function Drawer({ open, toggleDrawer }) {
	return (
		<StyledDrawer variant="permanent" open={open}>
			<Toolbar
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'flex-end',
					paddingX: [1],
				}}
			>
				<IconButton onClick={toggleDrawer}>
					<ChevronLeftIcon />
				</IconButton>
			</Toolbar>
			<Divider />
			<List component="nav">
				{/* {mainListItems} */}
				<Divider sx={{ my: 1 }} />
				{/* {secondaryListItems} */}
			</List>
		</StyledDrawer>
	)
}


const StyledDrawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
	({ theme, open }) => ({
		'& .MuiDrawer-paper': {
			position: 'relative',
			whiteSpace: 'nowrap',
			width: drawerWidth,
			transition: theme.transitions.create('width', {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.enteringScreen,
			}),
			boxSizing: 'border-box',
			...(!open && {
				overflowX: 'hidden',
				transition: theme.transitions.create('width', {
					easing: theme.transitions.easing.sharp,
					duration: theme.transitions.duration.leavingScreen,
				}),
				width: theme.spacing(7),
				[theme.breakpoints.up('sm')]: {
					width: theme.spacing(9),
				},
			}),
		},
	}),
)

export default Drawer

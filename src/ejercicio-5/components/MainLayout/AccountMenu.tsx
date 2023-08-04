import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import { PopoverProps } from "@mui/material"
import { useNavigate } from "react-router-dom"
import AuthService from "../../services/AuthService"
import { AuthContext } from "../../context/AuthContext"
import { User } from "firebase/auth"
import { useContext } from "react"

interface AccountMenuProps {
	anchorEl?: PopoverProps["anchorEl"],
	open: boolean,
	handleClose: () => void
}

export default function AccountMenu({ anchorEl, open, handleClose }: AccountMenuProps) {
	const navigate = useNavigate()
	const usuarioActual = useContext<User | null>(AuthContext)

	function handleIngresar() {
		navigate("/signin-side")
	}

	function handleCrearCuenta() {
		navigate("/signup")
	}

	async function handleCerrarSesion() {
		await AuthService.cerrarSesion()
		navigate("/signin-side")
	}


	return (
		<Menu
			id="positioned-menu"
			aria-labelledby="positioned-button"
			anchorEl={anchorEl}
			open={open}
			onClose={handleClose}
			onClick={handleClose}
			anchorOrigin={{
				vertical: "top",
				horizontal: "left",
			}}
			transformOrigin={{
				vertical: "top",
				horizontal: "left",
			}}
		>
			<MenuItem onClick={handleIngresar} disabled={Boolean(usuarioActual)}>Ingresar</MenuItem>
			<MenuItem onClick={handleCrearCuenta} disabled={Boolean(usuarioActual)}>Crear cuenta</MenuItem>
			<MenuItem onClick={handleCerrarSesion} disabled={Boolean(!usuarioActual)}> Cerrar sesion</MenuItem >
		</Menu >
	)
}
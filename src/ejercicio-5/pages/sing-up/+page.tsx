import React from "react"
import * as yup from "yup"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import Link from "@mui/material/Link"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import { useFormik } from "formik"
import { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { useLocation, useNavigate } from "react-router-dom"
import AuthService, { auth } from "../../services/AuthService"
import { ReactComponent as Calendar } from "../../assets/calendar.svg"


export default function SignUp() {
	const location = useLocation()
	const from = location.state?.from?.pathname || "/"
	const [mensaje, setMensaje] = useState("")
	const [currentUser, authLoading, authError] = useAuthState(auth)
	const navigate = useNavigate()

	const validacion = yup.object().shape({
		email: yup
			.string()
			.email()
			.required("Por favor ingrese un email"),
		password: yup
			.string()
			.min(8)
			.matches(/[a-zA-Z0-9]/, "Password can only contain Latin letters.")
			.required("Por favor ingrese un password")
	})

	const formik = useFormik({
		initialValues: {
			email: "",
			password: ""
		},
		enableReinitialize: true,
		onSubmit: handleSubmit,
		validationSchema: validacion
	})

	useEffect(() => {
		if (currentUser) {
			navigate(from, { replace: true })
		}
	}, [currentUser, authLoading])

	async function handleSubmit() {
		const { email, password } = formik.values
		const result = await AuthService.registarUsuario(email, password)

		if (result?.esError) {
			switch (result.errorCode) {
				case "auth/email-already-in-use":
					formik.errors.email = "El correo ya esta en uso. Elige otro."
					break

				default:
					setMensaje(result.errorCode as string)
					break
			}
		}
	}

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<Box
				sx={{
					marginTop: 8,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<Box height={120} width={120} margin={1}>
					<Calendar />
				</Box>

				<Typography component="h1" variant="h5">
					Crear Cuenta
				</Typography>
				<Typography component="div" variant="subtitle1">
					Por favor ingrese su email para que podamos enviarle una nueva contraseña.
				</Typography>
				<Box component="form" noValidate onSubmit={formik.handleSubmit} sx={{ marginTop: 3 }}>
					<Grid container spacing={2} >

						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								id="email"
								label="Email"
								name="email"
								autoComplete="email"
								value={formik.values.email}
								onChange={formik.handleChange}
								error={formik.touched.email && Boolean(formik.errors.email)}
								helperText={formik.touched.email && formik.errors.email}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								name="password"
								label="Password"
								type="password"
								id="password"
								autoComplete="new-password"
								value={formik.values.password}
								onChange={formik.handleChange}
								error={formik.touched.password && Boolean(formik.errors.password)}
								helperText={formik.touched.password && formik.errors.password}
							/>
						</Grid>
						<Grid item xs={12}>
							<Typography variant="h6" color="warning"> {mensaje}</Typography>
						</Grid>
					</Grid>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						disabled={formik.isSubmitting}
						sx={{ mt: 3, mb: 2 }}
					>
						Registrarme
					</Button>
					<Grid container justifyContent="flex-end">
						<Grid item>
							<Link href="signin-side" variant="body2">
								Ya tiene una cuenta? Ingrese aqui
							</Link>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</Container >
	)
}

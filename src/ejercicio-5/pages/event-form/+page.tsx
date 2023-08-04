import { Button, Card, CardActions, CardContent, CardHeader, Stack, TextField, Typography, useTheme } from "@mui/material"
import { useFormik } from "formik"
import * as yup from "yup"
import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker"
import { useNavigate } from "react-router-dom"
import EventsService from "../../services/EventsService"
import Evento from "../../models/Evento"

function EventForm() {
	const navigate = useNavigate()
	const theme = useTheme()

	const validation = yup.object().shape({
		nombre: yup
			.string()
			.min(3, "El nombre debe tener almenos 3 letras")
			.required("El nombre es obligatorio"),
		descripcion: yup.string(),
		fecha: yup.date().required("La fecha es obligatoria"),
	})

	const formik = useFormik({
		initialValues: new Evento({
			nombre: "",
			descripcion: ""
		}),
		validationSchema: validation,
		onSubmit: handleSubmit
	})

	async function handleSubmit() {
		const result = await EventsService.postEvento(formik.values)
		if (result?.ok) navigate("/")
		return
	}


	function handleCancel() {
		navigate("/")
	}

	function handleDateTimeChange(value) {
		formik.setFieldValue("fecha", value)
	}

	return (
		<>
			<Card sx={{ maxWidth: 700, margin: "auto" }}>
				<CardHeader
					title="Nuevo Evento"
					sx={{
						backgroundColor: theme.palette.secondary.main,
						color: "white",
						height: 100,
						alignItems: "flex-end"
					}}
				/>
				<CardContent>
					<form onSubmit={formik.handleSubmit}>

						<Stack marginTop={1}>
							<MobileDateTimePicker
								closeOnSelect
								minutesStep={5}
								value={formik.values.fecha ?? null}
								onChange={handleDateTimeChange}
								label="Fecha del evento"
							/>
							{formik.errors.fecha &&
								<Typography
									variant="caption"
									color={theme.palette.error.main}
									paddingLeft={1.5}
									paddingTop={0.5}
								>
									La fecha es obligatoria
								</Typography>}
						</Stack>

						<TextField
							fullWidth
							id="nombre"
							name="nombre"
							label="Nombre"
							margin="dense"
							value={formik.values.nombre}
							onChange={formik.handleChange}
							error={formik.touched.nombre && Boolean(formik.errors.nombre)}
							helperText={formik.touched.nombre && formik.errors.nombre}
						/>

						<TextField
							fullWidth
							id="descripcion"
							name="descripcion"
							label="Descripcion"
							margin="dense"
							multiline
							minRows={3}
							value={formik.values.descripcion}
							onChange={formik.handleChange}
							error={formik.touched.descripcion && Boolean(formik.errors.descripcion)}
							helperText={formik.touched.descripcion && formik.errors.descripcion}
						/>


					</form>
				</CardContent>
				<CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
					<Button color="secondary" onClick={handleCancel}> Cancelar </Button>
					<Button color="secondary" variant="contained" onClick={formik.submitForm}>
						Guardar
					</Button>
				</CardActions>
			</Card >
		</>
	)
}

export default EventForm
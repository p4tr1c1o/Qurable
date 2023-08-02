import Paper from "@mui/material/Paper"
import { Button, Stack, TextField, Typography, useTheme } from "@mui/material"
import { useFormik } from "formik"
import * as yup from "yup"
import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker"
import { useNavigate } from "react-router-dom"

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
		initialValues: {
			nombre: "",
			descripcion: "",
			fecha: ""
		},
		validationSchema: validation,
		onSubmit: handleSubmit
	})

	function handleSubmit() {
		alert(JSON.stringify(formik.values, null, 2))
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
			<Typography variant="h5" align="center"> Nuevo Evento </Typography>
			<Paper sx={{ maxWidth: 700, marginX: 'auto', marginTop: 2, padding: 3, overflow: 'hidden' }}>
				<form onSubmit={formik.handleSubmit}>

					<Stack marginTop={1}>
						<MobileDateTimePicker
							closeOnSelect
							minutesStep={5}
							value={formik.submitCount ? formik.values.fecha : undefined}
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

					<Stack direction="row" justifyContent="flex-end" marginTop={2} spacing={2}>
						<Button onClick={handleCancel}> Cancelar </Button>
						<Button
							variant="contained"
							onClick={formik.submitForm}
						>
							Guardar
						</Button>
					</Stack>

				</form>

			</Paper >
		</>
	)
}

export default EventForm
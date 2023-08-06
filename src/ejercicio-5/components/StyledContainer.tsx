import { Container } from "@mui/material"


function StyledContainer({ children }) {
	return (
		<Container maxWidth="md">
			{children}
		</Container>
	)
}


export default StyledContainer
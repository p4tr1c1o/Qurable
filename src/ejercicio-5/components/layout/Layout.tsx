import { Outlet } from "react-router-dom"
import Header from "./Header"
import { CssBaseline } from "@mui/material"
import styled from "@emotion/styled"


export default function Layout() {

	return (
		<>
			<CssBaseline />
			<Header />
			<StyledMain>
				<Outlet />
			</StyledMain>
		</>
	)

}

const StyledMain = styled("main")`
		min-height: calc(100vh - 11.5rem);
		background-color: "#eaeff1;
		`

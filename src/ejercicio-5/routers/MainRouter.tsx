
import { RouterProvider, createBrowserRouter } from "react-router-dom"
// import MainLayout from "../components/layout/MainLayout"
import Layout from "../components/layout/Layout"
import Home from "../pages/home/+page"


const router = createBrowserRouter([
	{
		path: "/", Component: Layout, children: [
			{ index: true, Component: () => <Home /> },
		]
	}
])

function MainRoutes() {
	return (
		<RouterProvider router={router} />
	)
}

export default MainRoutes

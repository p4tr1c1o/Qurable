
import { RouterProvider, createBrowserRouter } from "react-router-dom"
// import MainLayout from "../components/layout/MainLayout"
// import Layout from "../components/layout/Layout"
import Events from "../pages/events/+page"
import Layout from "../components/layout/Layout"


const router = createBrowserRouter([
	{
		path: "/", Component: Layout, children: [
			{ index: true, Component: () => <Events /> },
		]
	}
])

function MainRoutes() {
	return (
		<RouterProvider router={router} />
	)
}

export default MainRoutes

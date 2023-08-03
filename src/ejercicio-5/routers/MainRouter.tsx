
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import EventList from "../pages/event-list/+page"
import EventForm from "../pages/event-form/+page"
import EventDetail from "../pages/event-detail/+page"
import Layout from "../components/MainLayout/Layout"


const router = createBrowserRouter([
	{
		path: "/", Component: Layout, children: [
			{ index: true, Component: () => <EventList /> },
			{ path: "events/form", Component: () => <EventForm /> },
			{ path: "events/:id", Component: () => <EventDetail /> },
		]
	}
])

function MainRoutes() {
	return (
		<RouterProvider router={router} />
	)
}

export default MainRoutes

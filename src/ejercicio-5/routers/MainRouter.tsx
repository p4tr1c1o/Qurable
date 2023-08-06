
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import EventList from "../pages/event-list/+page"
import EventForm from "../pages/event-form/+page"
import EventDetail from "../pages/event-detail/+page"
import Layout from "../components/layout/Layout"
import SignInSide from "../pages/sign-in-side/+page"
import SignUp from "../pages/sing-up/+page"
import ForgotPassword from "../pages/forgot-password/+page"
import RequireAuth from "../components/RequireAuth"


const router = createBrowserRouter([
	{
		path: "/", Component: Layout, children: [
			{ index: true, Component: () => <EventList /> },
			{ path: "events/:id", Component: () => <EventDetail /> },
			{
				Component: () => <RequireAuth />, children: [
					{ path: "events/form", Component: () => <EventForm /> },
				]
			}
		]
	},
	{ path: "signin-side", Component: () => <SignInSide /> },
	{ path: "signup", Component: () => <SignUp /> },
	{ path: "forgot-password", Component: () => <ForgotPassword /> },
])

function MainRoutes() {
	return (
		<RouterProvider router={router} />
	)
}

export default MainRoutes

import Evento from "../models/Evento"

async function postEvento(evento: Evento) {
	try {
		const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/events`,
			{
				method: "POST",
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(evento),
			})
		return response
	} catch (error) {
		console.log(error)
	}
}

async function postAsistire(docId: string, uid: string) {
	try {
		const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/events/asistire`,
			{
				method: "POST",
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ docId, uid }),
			})
		return response
	} catch (error) {
		console.log(error)
	}
}

const EventsService = {
	postEvento,
	postAsistire
}

export default EventsService
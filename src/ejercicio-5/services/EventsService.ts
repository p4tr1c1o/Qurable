import Evento from "../models/Evento"

async function postEvento(evento: Evento) {
	try {
		const response = await fetch("http://127.0.0.1:5001/qurable-challenge/us-central1/api/events",
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

const EventsService = {
	postEvento
}

export default EventsService
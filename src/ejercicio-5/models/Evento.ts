import { DocumentData, QueryDocumentSnapshot, SnapshotOptions } from "firebase/firestore"



export default class Evento {
	docId?: string
	nombre: string
	descripcion?: string
	fecha: Date
	asistentes?: string[]

	public constructor(init?: Partial<Evento>) {
		Object.assign(this, init)

		if (init?.fecha) this.fecha = new Date(init.fecha)
	}
}


export const eventoConverter = {
	toFirestore(evento: Evento): DocumentData {
		return {
			...evento,
			fecha: new Date(evento.fecha)
		}
	},
	fromFirestore(
		snapshot: QueryDocumentSnapshot,
		options: SnapshotOptions
	): Evento {
		const data = snapshot.data(options)!
		return new Evento({
			...data,
			docId: snapshot.id,
			fecha: new Date(data?.fecha)
		})
	}
}
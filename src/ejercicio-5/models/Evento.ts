import { DocumentData, QueryDocumentSnapshot, SnapshotOptions, Timestamp } from "firebase/firestore"

export default class Evento {
	docId?: string
	nombre: string
	descripcion?: string
	fecha: Date

	public constructor(init?: Partial<Evento>) {
		Object.assign(this, init)
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
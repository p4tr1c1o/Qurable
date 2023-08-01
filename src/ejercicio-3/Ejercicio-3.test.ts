import { describe, expect, it } from 'vitest'
import { scheduleMeetings } from "./Ejercicio-3";

describe("Teniendo esta lista de reuniones [[8, 9], [9, 10], [9, 11], [11, 12]]", () => {
	const meetings = [[8, 9], [9, 10], [9, 11], [11, 12]]
	it("Espero tener el siguiente resultado [[8,9], [9,10], [11,12]]", () => {
		const result = scheduleMeetings(meetings)
		expect(result).to.be.deep.ordered.members([[8, 9], [9, 10], [11, 12]])
	})
})

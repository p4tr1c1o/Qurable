import { describe, expect, it } from 'vitest'
import { sort } from "./Ejercicio-2";

describe("Teniendo el siguiente array [3, 2, 1, 5, 4]", () => {
	const array = [3, 2, 1, 5, 4]
	it("Espero obtener [1, 2, 3, 4, 5]", () => {

		const result = sort(array)
		expect(result).to.ordered.members([1, 2, 3, 4, 5])
	})
})

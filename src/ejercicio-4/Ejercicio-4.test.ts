import { describe, expect, it, beforeAll } from 'vitest'
import { AnimalType, VirtualZoo } from "./Ejercicio-4"


describe("En un zoologico virtual hay diferentes tipos de animales", () => {
	let virtualZoo: VirtualZoo
	beforeAll(() => { virtualZoo = new VirtualZoo })

	it("Cuando un Leon interactua con un Leon", () => {

		const result = virtualZoo.interact(AnimalType.Lion, AnimalType.Lion)
		expect(result).toBe("Lion meets Lion, they form a pride.")
	})

	it("Cuando un Leon interactua con un Elefante", () => {

		const result = virtualZoo.interact(AnimalType.Lion, AnimalType.Elephant)
		expect(result).toBe("The elephant flees!")
	})

	it("Cuando un Leon interactua con un Mono", () => {

		const result = virtualZoo.interact(AnimalType.Lion, AnimalType.Monkey)
		expect(result).toBe("The monkey climbs up a tree")
	})

	it("Cuando un Elefante interactua con un Mono", () => {

		const result = virtualZoo.interact(AnimalType.Elephant, AnimalType.Monkey)
		expect(result).to.contains("are friendly with each other")
	})
})
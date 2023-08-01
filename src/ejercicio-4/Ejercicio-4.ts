export enum AnimalType {
	Lion = "Lion",
	Elephant = "Elephant",
	Monkey = "Monkey",
}

export class VirtualZoo {

	interact(animal1: AnimalType, animal2: AnimalType) {

		if (animal1 === AnimalType.Lion && animal2 === AnimalType.Lion)
			return "Lion meets Lion, they form a pride."

		if (animal1 === AnimalType.Lion || animal2 === AnimalType.Lion) {
			if (animal1 === AnimalType.Elephant || animal2 === AnimalType.Elephant)
				return "The elephant flees!"
			if (animal1 === AnimalType.Monkey || animal2 === AnimalType.Monkey)
				return "The monkey climbs up a tree"
		}

		return `${animal1} and ${animal2} are friendly with each other`
	}
}


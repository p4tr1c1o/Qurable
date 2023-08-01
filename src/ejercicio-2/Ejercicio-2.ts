export function sort(array: Array<number>) {
	let index, value, prevIndex;
	// recorro el array y comparo cada elemento contra su predecesor
	for (index = 1; index < array.length; index++) {
		value = array[index];
		prevIndex = index - 1;

		// si no es el primer elemento y el valor anterior es mayor al actual
		while (prevIndex >= 0 && array[prevIndex] > value) {
			// avanzo  el elemento una posicion 
			array[prevIndex + 1] = array[prevIndex];
			// ajusto para validar todas las otras posiciones anteriores
			prevIndex = prevIndex - 1;
		}

		array[prevIndex + 1] = value;
	}
	return array
} 

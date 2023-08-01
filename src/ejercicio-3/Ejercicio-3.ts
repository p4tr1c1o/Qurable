export function scheduleMeetings(meetings: number[][]) {
	// ordeno las reuniones por su tiempo maximo
	meetings.sort((a, b) => a[1] - b[1]);

	// inicializo los valores para comparar
	const validMeetings = [meetings[0]];
	let lastMeetingEndTime = meetings[0][1];

	// recorro las reuniones
	meetings.forEach(meet => {
		const [startTime, endTime] = meet

		// si la reunion comienza antes de la ultima hora
		if (startTime >= lastMeetingEndTime) {
			// acepto la reunion y sigo chequeando
			validMeetings.push(meet)
			lastMeetingEndTime = endTime
		}
	})

	return validMeetings;
}

import { onSnapshot } from "firebase/firestore"
import { useEffect, useReducer } from 'react'

interface State {
	data?
	error?: Error
	loading?: boolean
}
type Action =
	| { type: 'loading'; }
	| { type: 'fetched'; payload }
	| { type: 'error'; payload: Error }

export function useStream(collectionRef): State {
	const initialState: State = {
		error: undefined,
		data: undefined,
		loading: false
	}

	const streamReducer = (state: State, action: Action): State => {
		switch (action.type) {
			case 'loading':
				return { ...initialState, loading: true }
			case 'fetched':
				return { ...initialState, data: action.payload, loading: false }
			case 'error':
				return { ...initialState, error: action.payload, loading: false }
			default:
				return state
		}
	}

	const [state, dispatch] = useReducer(streamReducer, initialState)


	useEffect(() => {

		dispatch({ type: 'loading' })

		const unsubscribe = onSnapshot(collectionRef,
			(snapshot) => {
				const data = snapshot.docs.map(doc => doc.data())
				dispatch({ type: 'fetched', payload: data })

			},
			(error) => {
				console.log(error)
				dispatch({ type: 'error', payload: error as Error })
			}
		)

		return unsubscribe
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])



	return state
}
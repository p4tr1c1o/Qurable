import { createContext, useState, useEffect } from "react"
import { User, onAuthStateChanged } from "firebase/auth"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../services/AuthService"




export const AuthContext = createContext<User | null>(null)

function AuthProvider({ children }) {
	const [usuario, setUsuario] = useState<User | null>(null)
	const [currentUser, authLoading, authError] = useAuthState(auth)

	useEffect(() => {
		onAuthStateChanged(auth, async (currentUser) => {
			if (currentUser) {
				console.log("usuario logueado")

				return setUsuario(currentUser)
			}
			return null
		})
		return
	}, [currentUser, authLoading])

	return (
		<AuthContext.Provider value={usuario}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider



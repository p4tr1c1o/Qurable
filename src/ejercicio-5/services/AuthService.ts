import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	sendPasswordResetEmail,
} from "firebase/auth"
import { FirebaseError } from "firebase/app"

export const auth = getAuth()

async function registarUsuario(email: string, password: string) {

	try {
		await createUserWithEmailAndPassword(auth, email, password)

	} catch (error) {
		if (error instanceof FirebaseError) {
			return { esError: true, errorCode: error.code }
		}
		return { esError: true, errorCode: error }
	}

}

async function ingresar(email: string, password: string) {

	try {
		await signInWithEmailAndPassword(auth, email, password)

	} catch (error) {
		return { esError: true, errorCode: error }
	}
}

async function blanquearContraseña(email: string) {
	try {
		await sendPasswordResetEmail(auth, email)
	} catch (error) {
		return { esError: true, errorCode: error }
	}
}

async function cerrarSesion() {

	return await signOut(auth)
}

const AuthService = {
	registarUsuario,
	ingresar,
	cerrarSesion,
	blanquearContraseña,
}

export default AuthService
/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />
interface ImportMetaEnv {
	readonly API_BASE_URL: string
	readonly API_KEY: string
	readonly AUTH_DOMAIN: string
	readonly PROJECT_ID: string
	readonly STORAGE_BUCKET: string
	readonly MESSAGING_SENDER_ID: string
	readonly APP_ID: string
	readonly MEASUREMENT_ID: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
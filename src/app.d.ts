// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	interface Env {
		SMTP_HOST?: string;
		SMTP_PORT?: string;
		SMTP_USER?: string;
		SMTP_PASSWORD?: string;
		FORM_RATE_LIMITER: {
			limit: (options: { key: string }) => Promise<{ success: boolean }>;
		};
	}

	namespace App {
		interface Platform {
			env: Env;
			ctx: ExecutionContext;
			caches: CacheStorage;
			cf?: IncomingRequestCfProperties;
		}

		// interface Error {}
		interface Locals {
			locale: import('$lib/i18n').Locale;
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};

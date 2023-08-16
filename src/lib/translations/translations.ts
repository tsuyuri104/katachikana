import i18n, { type Config } from 'sveltekit-i18n';

const config: Config = {
	loaders: [
		{
			locale: 'ja',
			key: 'about',
			loader: async () => (await import('./ja/about.json')).default,
		},
		{
			locale: 'en',
			key: 'about',
			loader: async () => (await import('./en/about.json')).default,
		},
	],
};

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);

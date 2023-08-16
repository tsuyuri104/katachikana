import { loadTranslations, locale } from '$lib/translations/translations';

export const trailingSlash = 'always';

export const load = async ({ url }) => {
	const { pathname } = url;

	const defaultLocale: string = 'ja';

	const initLocale = locale.get() || defaultLocale;

	await loadTranslations(initLocale, pathname);
};

import { env } from '$env/dynamic/public';

export const prerender = true;

export const load = () => {
	return {
		dev: env.PUBLIC_ENV === 'DEV',
	};
};

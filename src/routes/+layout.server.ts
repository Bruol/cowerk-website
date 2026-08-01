import type { LayoutServerLoad } from './$types';

export const trailingSlash = 'always';

export const load: LayoutServerLoad = ({ locals }) => {
	return { locale: locals.locale };
};

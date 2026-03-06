import { type Handle } from '@sveltejs/kit';

// No redirects needed for a new site.
// Add redirects here if URLs change in the future.

export const handle: Handle = async ({ event, resolve }) => {
    return resolve(event);
};

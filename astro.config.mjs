import { defineConfig } from 'astro/config';

export default defineConfig({
	site: 'https://my-astro-blog-2.pages.dev',
	image: {
		service: {
			entrypoint: 'astro/assets/services/noop'
		}
	}
});

import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: "Nikul's Website",
			social: {
				github: 'https://github.com/nikulpatel3141',
				linkedin: 'https://github.com/nikulpatel3141',
			},
			logo: { src: './src/assets/img/knight.svg' },
			favicon: './src/assets/img/favicon.ico',
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});

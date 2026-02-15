// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import edgeoneAdapter from '@edgeone/astro';

// https://astro.build/config
export default defineConfig({
import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://bases.de.datos',
  base: 'my-repo',
});
  adapter: edgeoneAdapter(),
  output: 'static',
  integrations: [react()]
});

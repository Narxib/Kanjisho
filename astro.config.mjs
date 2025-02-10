import { defineConfig, envField } from 'astro/config';
import netlify from '@astrojs/netlify';
import tailwind from "@astrojs/tailwind";
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: 'server',
  adapter: netlify(),
  env: {
    schema: {
      API_KEY: envField.string({ context: "server", access: "secret" }),
    }
  }
}
);
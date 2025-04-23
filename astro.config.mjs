// import { defineConfig } from 'astro/config';
// import tailwind from '@astrojs/tailwind';

// // https://astro.build/config
// export default defineConfig({
//   integrations: [tailwind()],
//   site: 'https://nabiya-enterprises.com',
// });
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://rashidnsit.github.io/Nabiya-Enterprises-Arif-Bhai-Saket/',
  base: '/Nabiya-Enterprises-Arif-Bhai-Saket/',
});

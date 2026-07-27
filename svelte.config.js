import { mdsvex } from "mdsvex";
import adapter from "@sveltejs/adapter-netlify";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://svelte.dev/docs/kit/integrations
  // for more information about preprocessors
  preprocess: [vitePreprocess(), mdsvex()],
  kit: {
    adapter: adapter(),
    prerender: {
      handleHttpError: ({ path, referrer, message }) => {
        // ignore missing thumbs
        if (path.startsWith("/thumbs/")) {
          return;
        }
        throw new Error(message);
      },
    },
    // {
    //   pages: "build",
    //   assets: "build",
    //   fallback: undefined,
    //   precompress: false,
    //   strict: true,
    // }),
    experimental: {
      remoteFunctions: true,
    },
  },
  extensions: [".svelte", ".svx"],
};

export default config;

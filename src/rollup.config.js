import svelte from 'svelte';
import sveltePreprocess from 'svelte-preprocess';

const preprocess = sveltePreprocess({
  scss: {
    includePaths: ['src'],
  },
  postcss: {
    plugins: [require('autoprefixer')],
  },
});

export default {
  client: {
    plugins: [
      svelte({
        preprocess
      }),
    ]
  },
  server: {
    plugins: [
      svelte({
        preprocess
      }),
    ],
  },
};

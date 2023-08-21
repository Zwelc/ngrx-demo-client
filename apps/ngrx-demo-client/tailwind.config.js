const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        text: '#040201',
        background: '#fdf5f2',
        primary: '#853014',
        secondary: '#f2b9a6',
        accent: '#b1401b',
      },
    },
  },
  plugins: [],
};

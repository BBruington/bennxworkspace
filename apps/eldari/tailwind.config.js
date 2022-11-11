const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('../../tailwind-workspace-preset.js')],
  content: [
    join(
      __dirname,
      '{src,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    minWidth: {
      '1/2': '50%',
    },
    extend: {},
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};

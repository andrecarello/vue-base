import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  safelist: [],
  darkMode: 'dark',
  preflight: true,
  scan: {
    dirs: [ 'src' ],
    exclude: [
      'node_modules',
      '.git',
      'public/**/*',
      '*.template.html',
      'index.html',
    ],
    include: [],
  },
  // transformCSS: 'pre',
  theme: {
    extend: {
      fontFamily: {},
      colors: {},
      spacing: {},
      borderRadius: {},
      lineClamp: {},
    },
  },
  shortcuts: {},
});

import { defineConfig } from 'vite'
import supersvgPlugin from 'vite-plugin-supersvg';

export default defineConfig({
  base: '/MacFreewares/',
  plugins: [
    supersvgPlugin({
      srcDir: 'src/svgicons/',      // Icons folder
      destDir: 'public/assets/images/icons/',     // Destination sprites svg
      config: {                     // svg-sprite config
        shape: {
          spacing: { padding: 2 },
        },
      },
      lazy: true            // Only generate sprites when changes occur
    })
  ]
});

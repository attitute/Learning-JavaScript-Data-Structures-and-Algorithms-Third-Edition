import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';

function pathResolve(dir) {

  return resolve(__dirname, '.', dir);

}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  alias: {
    '/@/': pathResolve('src'),
  },
})

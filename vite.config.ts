import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

const { resolve } = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      include: [
        /\.[tj]sx?$/,
        /\.vue$/, /\.vue\?vue/,
        /\.md$/,
      ],
      imports: ['vue', 'vue-router']
    }),
    Components({
      resolvers: [
        IconsResolver({
          prefix: 'i'
        })
      ]
    }),
    Icons({})
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
})

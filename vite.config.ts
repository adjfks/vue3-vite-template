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
      imports: ['vue', 'vue-router'],
      // 配置eslint解析规则，防止报错
      eslintrc: {
        enabled: true, // 设置为true自动生成
        filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
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

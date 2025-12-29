import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import path from "path"
// https://vite.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      "@":path.resolve(__dirname, "src")
    }
  },
  server:{
    proxy:{
      '/api': {
        target: 'https://yqzjifennew.jkcrm.cn',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        secure: false,
        cookieDomainRewrite: 'localhost' // 可选：重写 Set-Cookie 的 Domain
      },
    }
  },
  plugins: [
    vue(),
    WindiCSS(),
  ],
})

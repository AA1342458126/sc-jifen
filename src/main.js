import { createApp } from 'vue'
// 引入 createPinia 函数
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import router from './router'
import 'element-plus/dist/index.css'
import 'virtual:windi.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import App from './App.vue'
const app = createApp(App)
// 使用 createPinia() 来创建 Pinia（根存储），并应用到整个应用中
app.use(createPinia())
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(router)
app.use(ElementPlus)
app.mount('#app')

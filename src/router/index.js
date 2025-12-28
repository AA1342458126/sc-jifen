import {
    createRouter,
    createWebHashHistory
} from 'vue-router'
import Index from "@/pages/index.vue"
import NotFound from "@/pages/404.vue"
import Login from "@/pages/login.vue"
import { getToken } from "@/composables/auth";
const routes = [
    {
        path:"/",
        component:Index
    },
    {
        path: '/:pathMatch(.*)*', 
        name: 'NotFound', 
        component: NotFound
    },
    {
        path: '/login', 
        name: 'Login', 
        component: Login
    }
]
const router = createRouter({
    history:createWebHashHistory(),
    routes
})
// 全局前置守卫
router.beforeEach((to, from, next) => {
  // 例如，检查用户是否已登录
  const isAuthenticated = !getToken() // 假设这是检查登录状态的逻辑
  if (to.path === '/login' && isAuthenticated) {
    // 如果用户已登录，重定向到首页
    next('/');
  } else if (to.path !== '/login' && !isAuthenticated) {
    // 如果用户未登录，尝试访问非登录页面，重定向到登录页
    next('/login');
  } else {
    // 继续路由跳转
    next();
  }
});
export default router
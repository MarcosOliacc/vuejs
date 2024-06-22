import * as rout from 'vue-router'
import Home from './pages/Home.vue'
import Search from './pages/Search.vue'
const router = rout.createRouter({
    history: rout.createWebHashHistory(),
    routes: [
        {path: '/', component: Home},
        {path: '/search', component: Search}
    ]
})
export default router
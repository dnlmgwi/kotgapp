import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import AboutViewVue from './views/AboutView.vue'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HelloWorld,
        }, {
            path: '/about',
            component: AboutViewVue,
        }
    ]
})
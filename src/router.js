import { createRouter, createWebHistory } from "vue-router";


import Home from '/src/views/Home-page.vue'
import Contato from '/src/views/Contato-page.vue'


const routes = [
    {
        path: '/',
        name: home,
        component: Home
    },
    {
        path: '/',
        name: home,
        component: Home
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
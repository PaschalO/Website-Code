import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'
import Portfolio from './views/Portfolio.vue'
import NProgress from 'nprogress'
import Animate from 'animate.css'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: './portfolio',
            name: 'portfolio',
            component: Portfolio
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        }
    ]
})

router.beforeResolve((routerTo, routerFrom, next) => {

    if (routerTo.name) {
        NProgress.configure({
            easing: 'ease',
            speed: 800
        }).start();
    }
    next();
});

router.afterEach((to, from) => {
    NProgress.done()
});

export default router



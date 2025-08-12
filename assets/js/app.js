import Vue from './vendor/vue.js'
import Router from './vendor/vue-router.js'

import get_template from './components/get_template.js'

import page_menu from './components/menu/home.js'
Vue.component('p-menu', page_menu)

import page_footer from './components/footer/home.js'
Vue.component('p-footer', page_footer)

import page_home from './view/home/home.js'
Vue.component('p-home', page_home)

import page_curso from './view/curso/home.js'
Vue.component('p-curso', page_curso)

import page_sobre from './view/sobre/home.js'
Vue.component('p-sobre', page_sobre)

import page_eventos from './view/eventos/home.js'
Vue.component('p-eventos', page_eventos)

import page_contato from './view/contato/home.js'
Vue.component('p-contato', page_contato)

Vue.use(Router)



const routes = [
    { path: '/', component: { template: '<p-home></p-home>' } },
    { path: '/curso', component: { template: '<p-curso></p-curso>' } },
    { path: '/sobre', component: { template: '<p-sobre></p-sobre>' } },
    { path: '/eventos', component: { template: '<p-eventos></p-eventos>' } },

    { path: '/contato', component: { template: '<p-contato></p-contato>' } }
]

const router = new Router({ routes })

new Vue({
    router,
    data: {}
}).$mount('#app')

;(async () => { })()
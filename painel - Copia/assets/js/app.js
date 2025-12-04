import Vue from './vendor/vue.js'
import Router from './vendor/vue-router.js'

import get_template from './components/get_template.js'

import page_menu from './components/menu/home.js'
Vue.component('p-menu', page_menu)

import page_footer from './components/footer/home.js'
Vue.component('p-footer', page_footer)


import page_login from './view/login/home.js'
Vue.component('p-login', page_login)
 
import page_blog from './view/blogs/blog.js'
Vue.component('p-blog', page_blog)

import page_novo_blog from './view/blogs/cadastro.js'
Vue.component('p-novo_blog', page_novo_blog)


 
import page_galeria from './view/galeria/galerias.js'
Vue.component('p-galeria', page_galeria)

import page_novo_galeria from './view/galeria/cadastro.js'
Vue.component('p-novo_galeria', page_novo_galeria)






import page_home from './view/home/home.js'
Vue.component('p-home', page_home)
   
import page_novo from './view/novo_projecto/home.js'
Vue.component('p-novo_projecto', page_novo)

import page_novo_mapa from './view/novo_projecto/home_mapa.js'
Vue.component('p-novo_mapa', page_novo_mapa)
 
 



import page_usuario from './view/usuario/home.js'
Vue.component('p-usuario', page_usuario)

import page_mensagem from './view/mensagem/home.js'
Vue.component('p-mensagem', page_mensagem)


Vue.use(Router)



const routes = [
    { path: '/home', component: { template: '<p-home></p-home>' } },
    { path: '/novo-projecto', component: { template: '<p-novo_projecto></p-novo_projecto>' } },
    { path: '/novo-mapa', component: { template: '<p-novo_mapa></p-novo_mapa>' } },



    { path: '/', component: { template: '<p-login></p-login>' } },
    { path: '/blog', component: { template: '<p-blog></p-blog>' } },
    { path: '/novo_blog', component: { template: '<p-novo_blog></p-novo_blog>' } },

    { path: '/galeria', component: { template: '<p-galeria></p-galeria>' } },
    { path: '/novo_galeria', component: { template: '<p-novo_galeria></p-novo_galeria>' } },

    
    { path: '/novo-usuario', component: { template: '<p-usuario></p-usuario>' } },
    { path: '/nova-mensagem', component: { template: '<p-mensagem></p-mensagem>' } },

]

const router = new Router({ routes })

new Vue({
    router,
    data: {}
}).$mount('#app')

;(async () => { })()
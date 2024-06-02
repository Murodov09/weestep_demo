import { createRouter, createWebHashHistory } from "vue-router";

import Blog from "./views/Blog.vue"
import Home from "./views/Home.vue"
import Contact from "./views/Contact.vue"
import Catalog from "./views/Catalog.vue"
import Wherebought from "./views/Wherebought.vue"
import About from "./views/About.vue"



export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', component: Home },
        {path: '/blog', component: Blog},
        {path: '/contact', component: Contact},
        {path: '/catalog', component: Catalog},
        {path: '/where_buy', component: Wherebought},
        {path: '/about', component: About}

    ]
})
import MainPage from "@/pages/MainPage.vue";
import {createRouter, createWebHistory} from "vue-router"
import BoardPage from "@/pages/BoardPage.vue";
import StatusPage from "@/pages/StatusPage.vue";
import TermsOfUse from "@/pages/TermsOfUse.vue";
import BoardTask from "@/pages/BoardTask.vue"

const routes = [
    {
        path: '/',
        name: 'home',
        component: MainPage
    },
    {
        path: '/status',
        component: StatusPage
    },
    {
        path: '/board',
        component: BoardPage
    },
    {
        path: '/terms',
        component: TermsOfUse
    },
    {
        path: '/taski',
        component: BoardTask 
    }
]


const router = createRouter({
    routes,
    history: createWebHistory(),
})



function isAuthenticated() {
    return !!localStorage.getItem('token');
}


router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !isAuthenticated()) {
        next({ name: 'home' }); 
    } else {
        next(); 
    }
});

export default router;
import { createRouter, createWebHashHistory } from "vue-router"
import {isAuthenticatedGuard} from "./authGuard";

const routes = [
    {
        path: '/',
        redirect: '/pokemon'
    },
    {
        path: '/pokemon',
        name: 'pokemon',
        component: () => import(/*webpackChunkName: "PokemonLayout"*/ "../modules/pokemon/layouts/PokemonLayout"),
        children: [
            {
                path: 'home',
                name: 'pokemon-home',
                component: () => import(/*webpackChunkName: "ListPage"*/ "../modules/pokemon/pages/ListPage")
            },
            {
                path: 'about',
                name: 'pokemon-about',
                component: () => import(/*webpackChunkName: "AboutPage"*/ "../modules/pokemon/pages/AboutPage")
            },
            {
                path: 'pokemon/:id',
                name: 'pokemon-id',
                component: () => import(/*webpackChunkName: "PokemonPage"*/ "../modules/pokemon/pages/PokemonPage"),
                props: (route) => {
                    const id = Number(route.params.id)
                    return isNaN(id) ? { id: 1 } : { id }
                }
            },
            {
                path: '',
                name: "pokemon-redirect",
                redirect: { name: "pokemon-about" }
            },
        ]
    },
    {
        path: "/dbz",
        name: "dbz",
        beforeEnter: [isAuthenticatedGuard],
        component: () => import(/*webpackChunkName: "DBZLayout"*/ "../modules/dbz/layouts/DBZLayout"),
        children: [
            {
                path: 'characters',
                name: 'dbz-characters',
                component: () => import(/*webpackChunkName: "DBZ Characters"*/ "../modules/dbz/pages/Characters")
            },
            {
                path: 'about',
                name: 'dbz-about',
                component: () => import(/*webpackChunkName: "DBZ AboutPage"*/ "../modules/dbz/pages/About")
            },
            {
                path: '',
                name: "dbz-redirect",
                redirect: { name: "dbz-about" }
            },
        ]
    },
    { 
        path: '/:pathMatch(.*)*', 
        component: () => import(/* webpackChunkName: "NoPageFound" */ '@/modules/shared/pages/NoPageFound')
    },
    // {
    //     path: '',
    //     redirect: '/pokemon'
    // },


]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})

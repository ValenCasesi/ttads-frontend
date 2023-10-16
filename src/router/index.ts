import { RouteRecordRaw, createRouter, createWebHistory} from "vue-router";

// aca declara routes y es de tipo array de routerecordraw con los diffs paths,names y components.
const routes: RouteRecordRaw[]=[
    {
        path:'/',
        alias:'/djs',//aca le digo q si me muestre lo mismo en / o /djs
        name:'djs', 
        component:()=>import('../components/DJ/DjList.vue'),
        // para la ruta /djs importa(muestra,renderiza) el componente djlist.vue
    },
    {
        path:'/djs/new',
        name:'djs-new',
        component:()=>import('../components/DJ/DjForm.vue'),
    },
    {
        path:'/djs/:id/:nombre/:instagram/:tel',
        name:'djs-details',
        component:()=>import('../components/DJ/DjDetail.vue'),
    },

]

//en esta variable creamos el router con los parametros history que permite ingresar las diferentes
//rutas en la url y redirecconar correctamente. El otro parametros routes son las rutas de arriba.
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
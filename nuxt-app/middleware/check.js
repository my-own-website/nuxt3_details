
export default defineNuxtRouteMiddleware((to,from)=>{
    console.log('middleware',to);
    console.log('middleware',from);
})
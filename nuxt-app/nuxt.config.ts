// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
 
  modules: ['@pinia/nuxt'],      
  pinia: {
    storesDirs: ['./stores/**', './custom-folder/stores/**'],
  },
  
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ['~/assets/css/main.css'],
  
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  
  app:{
    head:{
      title:"MY App",
      // viewport:"width=device-width, initial-scale=1",
      // charset:"utf-8",
      // meta:[
      //   {name:"description" , content:"description my App"},
      //   {name:"viewport" , content:"width=device-width, initial-scale=1"},
      //   {  charset:"utf-8",},
      // ],
      // script:[
      //   {src:"aaaaaaaaaaaaaaaaaa"}
      // ],
      // style:[
      //   // {children:":root{background:green}" , type:"text/css"},
      //   {children:":root{color:red}" , type:"text/css"}
      // ],
      // link:[
      //   {rel:'stylesheet',href:"bbbbbbbbbbb"}
      // ],
      // noscript:[
      //   {children:"abcdef"}
      // ]
    }
  }
})

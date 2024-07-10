<template>
    <div>
        <h1>number: {{ $route.params.group }}</h1>
        <h1>number: {{ $route.params.id }}>>>>>>>>>>welcome</h1>
    </div>
</template>


<script setup>

const _title = ref("My Title")
const tit = ref("My title page")

useHead({
    title:tit,
    // titleTemplate:"%s - USER PAGE"  OR👇
    // titleTemplate: (title) => {
    //     return `${title} /(-) listsssssss` OR👇
    //      return title? `${title}-list2 ` :  `list2`
    // },
    meta: [
        { name: "description", content:_title },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { charset: "utf-8", },
    ],
    script: [
        { src: "aaaaaaaaaaaaaaaaaa" , body:true},
        
    ],
    style: [
        // {children:":root{background:green}" , type:"text/css"},
        { children: ":root{color:red}", type: "text/css" }
    ],
    link: [
        { rel: 'stylesheet', href: "bbbbbbbbbbb" }
    ],
    noscript: [
        { children: "abcdef" }
    ],
    bodyAttrs:{
        class:'test25',
        name:"bahlool"
    },
    htmlAttrs:{
         class:"test25",
        name:"bahlool"
    }
})
</script>
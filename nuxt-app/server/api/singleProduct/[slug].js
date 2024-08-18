export default defineEventHandler(async (event)=>{
    const slug = event.context.params.slug
    console.log("🚀 ~ defineEventHandler ~ query:", query)
    return await $fetch(`https://fakestoreapi.com/products/${slug}`) 
})
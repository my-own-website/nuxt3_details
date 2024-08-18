export default defineEventHandler(async (event)=>{
    const query = getQuery(event)
    console.log("🚀 ~ defineEventHandler ~ query:", query)
    return await $fetch(`https://fakestoreapi.com/products?limit=${query.limit}`) 
})
<template>
    <ProductDetails :product="product"/>
</template>

<script setup>

const {id}=useRoute().params
const url = `https://fakestoreapi.com/products/${id}`
const {data:product} = await useFetch(url)

if(!product.value){
    throw createError({
        statusCode:404,
        statusMessage:"product not found 😢😢"
    })
}
</script>
<template>
    <div class="text-center shadow-md h-full bg-white rounded-md p-3">
        <img :src="product.image" class="thumb">
        <p class="font-bold text-gray-500 m-4">{{ product.title }}</p>
        <nuxt-link :to="`/prods/${product.id}`">See More</nuxt-link>
    </div>
</template>

<script setup>
const {data:product}=defineProps(['product'])
</script>

<style scoped>
.thumb{
    min-height: 70px;
    min-width: 120px;
    margin: 0 auto;
}
</style>
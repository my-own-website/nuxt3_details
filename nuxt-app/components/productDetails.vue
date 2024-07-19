<template>
    <div class="text-center shadow-md h-full bg-white rounded-md p-3">
        <div class="grid grid-cols-2 gap-2">
            <div class="p-7">
                <img :src="product.image" class="mx-auto my-7">
            </div>
            <div class="p-7">
                <p class="font-bold text-gray-500 m-4">title : {{ product.title }}</p>
                <p class="font-bold text-gray-500 m-4">price : {{ product.price }}</p>
                <h3 class="font-bold text-gray-500 m-4">desc : </h3>
                <p class="m-7">{{ product.description }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
const { data: product } = defineProps(['product'])
</script>

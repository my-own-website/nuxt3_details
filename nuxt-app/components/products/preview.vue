<template>
    
    <div class="max-w-sm bg-white rounded-lg border border-indigo-200 shadow-md dark:bg-gray-800">
        <!-- product::{{ product }} -->
        <nuxt-link :to="`/products/${product.slug}`">
            <div>
                <img class="rounded-t-lg h-80 w-96 object-cover hover:animate-pulse"
                    :src="`/products/${product.image}`" :alt="`${product.name}'s image'`">
            </div>
            <div class="p-5">
                <div>
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-indigo-600 dark:text-white">
                        {{ product.name }}
                    </h5>
                </div>
                <p class="mb-3 font-medium text-indigo-700 dark:text-gray-400">
                    ${{ product.price }}
                </p>
                <!-- <p>Date : {{ today }}</p> -->
                <p>today Date : {{ $todayDate }}</p>
            </div>
        </nuxt-link>
    </div>
</template>

<script setup>
const props = defineProps({
    product: {
        type: Object,
        required: true
    }
})

// const nuxtApp = useNuxtApp()
// const today = nuxtApp.today
</script>
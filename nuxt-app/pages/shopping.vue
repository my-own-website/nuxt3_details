<template>
    <div>
        products:{{ products }}
        <div class="flex justify-around mt-20" v-if="products">
            <div v-for="product in products" :key="product.id">
                <ProductsPreview :product="product"/>
            </div>
        </div>
    </div>
</template>

<script setup>
    import {useProductsStore} from '../stores/products'
    const productsStore = useProductsStore()
    const products = computed(()=>{
        return productsStore.products
    })
</script>
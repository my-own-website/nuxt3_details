<template>
    <div v-if="pending">
        LOADING😎...
    </div>
    <div class="grid grid-cols-4 gap-5">
        <div v-for="product in products" :key="product.id">
            <ProductCard :product="product" />
        </div>
    </div>
    <div v-if="error">
        ERROR😢...
         <!-- {{ error }} -->
    </div>

    <a @click="limit">limit</a>
</template>

<script setup>
    // const { data: products } = await useFetch("https://fakestoreapi.com/products")
    const number = ref(8)
    const {data:products, pending ,error, refresh} = await useAsyncData("products",()=>$fetch(`api/products?limit=${number.value}`))

    const limit = ()=>{
        number.value--
        refresh()
    }

</script>
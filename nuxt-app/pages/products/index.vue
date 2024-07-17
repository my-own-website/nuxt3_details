<template>
    <div v-if="pending">
        LOADING...
    </div>
    <div class="grid grid-cols-4 gap-5">
        <div v-for="product in products" :key="product.id">
            <ProductCard :product="product" />
        </div>
    </div>
    <div v-if="Error">
        ERROR...
    </div>

    <a @click="more">more</a>
</template>

<script setup>
    // const { data: products } = await useFetch("https://fakestoreapi.com/products")
    const number = ref(8)
    const {data:products, pending ,error, refresh} = await useAsyncData("products",()=>$fetch(`https://fakestoreapi.com/products?limit=${number.value}`))

    const more = ()=>{
        number.value--
        refresh()
    }

</script>
<template>
    
    <Head>
        <Title>
            {{ product?.name }}
        </Title>
    </Head>
    <div>
       <div class="flex mt-12 p-4">
        <div class="w-1/2">
            <div>
                <img class="rounded-3xl border-indigo-200 hover:animate-pulse"
                    :src="`/products/${product?.image}`" :alt="`${product?.name}'s image'`">
            </div>
        </div>
        <div class="w-1/2 flex flex-col items-center justify-center">
            <div>
                <h2 class="text-5xl text-indigo-700">
                    {{ product?.name }}
                </h2>
            </div>
            <div class="my-8 flex flex-col items-center justify-center" >
                <button class="px-6 py-4 bg-indigo-600 hover:bg-indigo-700 text-indigo-200 rounded-lg" @click="addToCart">
                    Add to Cart * ${{ product?.price }}
                </button>
            </div>
        </div>
       </div>
    </div>
</template>

<script setup>
    
    import { useProductsStore } from '../../stores/products';
    import {useCartStore} from '../../stores/cart'
    const productsStote = useProductsStore()
    const cartStore = useCartStore()
    const route = useRoute()
    console.log('route.params.slug', route.params.slug);
   
    const product =computed(()=>{
        return productsStote.products.find(product=>{
            return product.slug == route.params.slug
        })
    })
    console.log("🚀 ~ product ~ producttttttt:", product)

    async function addToCart(){
        // console.log('iddd', product.value.id);
        // console.log('iddd', product.value.name);
        // console.log('iddd', product.value.price);
        // console.log('iddd', product.value.stripedPricedId);
        await cartStore.addToCart({
            id:product.value.id,
            name:product.value.name,
            price:product.value.price,
            stripedPricedId:product.value.stripedPricedId
        })
    }
</script>
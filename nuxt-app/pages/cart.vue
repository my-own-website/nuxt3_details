<template>
    <Head>
        <Title>Cart - My Shop</Title>
    </Head>
    <div class="px-12 mt-12">
        cartItems::::{{ cartItems }}
        <div>
            <div class="flex justify-between border-b p-2 font-medium bg-white">
                <div class="w-1/3">Product Name</div>
                <div class="w-1/3 text-center">Quantity</div>
                <div class="w-1/3">Sub total</div>
            </div>
            <div class="flex justify-between border-b p-2 font-normal" v-for="item in cartItems">
                <div class="w-1/3">{{ item.productName }}</div>
                <div class="w-1/3 text-center">{{ item.quantity }}</div>
                <div class="w-1/3">{{ item.subTotal.toLocaleString() }}</div>
            </div>

            <div v-if="cartItems.length>0">
                <div class="my-8 flex flex-col items-end justify-center">
                    <button class="border-2 border-gray-900 bg-slate-600 ">Continue to buy</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { useCartStore } from '../stores/cart';
    const cartStore = useCartStore()
    const cartItems = computed(()=>{
        return cartStore.items
    })
</script>
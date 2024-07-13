<template>

    <h1 class="text-3xl font-bold  text-zinc-400">
        Hello world!
    </h1>

    <div @click="nextTitle">next</div>
    <div @click="prevTitle">prev</div>

    <h5 class=" text-2xl">title : <span class="text-rose-500">{{ fetchProduct }}</span></h5>
    <!-- <button @click="goToAdmnin">toAdmin</button><br>
    <button @click="goToIndex">toDefault</button><br> -->
    <!-- <button @click="showAlert('مشکل داریم')">showAlert</button> -->
    <h1>

        <!-- <img src="/Village.png" alt=""> -->
    </h1>
</template>

<script setup>

// const data = await $fetch("https://fakestoreapi.com/products", {
//     method: "POST",
//     body: JSON.stringify(
//         {
//             title: 'test product',
//             price: 13.5,
//             description: 'lorem ipsum set',
//             image: 'https://i.pravatar.cc',
//             category: 'electronic'
//         }
//     )
// })

const id = ref(1)

const url = computed(()=> `https://fakestoreapi.com/products/${id.value}`)

const {data:fetchProduct} = useFetch(url)

const nextTitle = async() => {
    id.value++
}
const prevTitle = async() => {
    if (id.value > 1) {
        id.value--
    }
}

useHead({
    title: "HOME PAGE"
})

function goToAdmnin() {
    setPageLayout("admin")
}
function goToIndex() {
    setPageLayout("default")
}

function showAlert(_msg) {
    toastr.error(_msg)
}
// .........
</script>

<style>
@import "../assets/css/main.css";
</style>


*****************************
<!-- 

// using $fetch👇👇👇
<div @click="nextTitle">next</div>
<div @click="prevTitle">prev</div>
<h5 class=" text-2xl" v-for="title in fetchProducts">title : <span class="text-rose-500">{{ title }}</span></h5>

const fetchProducts = ref()
const id = ref(1)
onBeforeMount(() => {
    fetch()
})
const fetch = async () => {
    const data = await $fetch(`https://fakestoreapi.com/products/${id.value}`)
    fetchProducts.value = {
        title: data.title
    }
}
const nextTitle = () => {
    id.value++
    fetch()
}
const prevTitle = () => {
    if (id.value > 0) {
        id.value--
        fetch()
    }
} -->
<!-- ***************************** -->

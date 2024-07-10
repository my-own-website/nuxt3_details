<template>

    <h1 class="text-3xl font-bold  text-zinc-400">
        Hello world!
    </h1>
    <!-- <button @click="goToAdmnin">toAdmin</button><br>
    <button @click="goToIndex">toDefault</button><br> -->
    <!-- <button @click="showAlert('مشکل داریم')">showAlert</button> -->
    <h1>

        <!-- <img src="/Village.png" alt=""> -->
    </h1>
</template>

<script setup>

const data = await $fetch("https://fakestoreapi.com/products", {
    method: "POST",
    body: JSON.stringify(
        {
            title: 'test product',
            price: 13.5,
            description: 'lorem ipsum set',
            image: 'https://i.pravatar.cc',
            category: 'electronic'
        }
    )
})

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

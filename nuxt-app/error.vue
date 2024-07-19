<template>
    <div class="mt-7 max-w-sm mx-auto text-center shadow-md bg-red-800 rounded-md text-white">
        <p class="mt-7 text-5xl font-bold ">{{ error.statusCode }}</p>
        <p class="mt-7 text-3xl ">Message Error : </p>
        <p class="mt-7">{{ error.message }}</p>

        <button class="btn my-7 p-3 bg-slate-700" @click="handleError">GO HOME</button>
    </div>
</template>

<script setup>
    defineProps(['error'])

    const handleError = ()=>{
        console.log('object');
        clearError({redirect :"/"})
    }
</script>
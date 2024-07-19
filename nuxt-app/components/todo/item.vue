<template>
    <li>
        {{ props.item.text }}
    </li>
</template>


<script setup>
    const props = defineProps({
        item:Object
    })
</script>
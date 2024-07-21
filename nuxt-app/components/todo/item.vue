<template>
    <li class="br">
        {{ props.item.text }}
    </li>
</template>


<script setup>
    const props = defineProps({
        item:Object
    })
</script>
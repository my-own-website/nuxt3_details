<template>
    <div>
        <h1>To Do List</h1>
        <input type="text" v-model="newItemText" @keyup.enter="addItem">
        <button @click="addItem">ADD</button>
        <button @click="removeItem">REMOVE</button>
        <li v-for="task in tasks" :key="task">{{ task }}</li>
    </div>
</template>

<script setup>

    const { tasks, newItemText, addItem, removeItem } = useTodo()

</script>
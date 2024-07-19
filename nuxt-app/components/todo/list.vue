<template>
    <ul>
         <TodoItem v-for="(item,index) in todoList" :item="item"  :key="index"  />
    </ul>
</template>


<script setup>
    const {todoList} = useTodoNew()
</script>
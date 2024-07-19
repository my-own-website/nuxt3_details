<template>
    <form class="flex space-x-4 items-center" @submit.prevent="addNew">
        <input class="p-2 border border-gray-100 rounded outline-none focus:ring focus:ring-gray-400 " type="text"
            placeholder="todo text ..." v-model="text">
        <button class="bg-sky-500 text-gray-100 rounded px-4 py-2 outline-none" type="submit">Add</button>
    </form>
</template>

<script setup>
const { addTodo, todoList } = useTodoNew()
const text = ref("")

function addNew() {
    if (!text.value || text.value == "") {
        alert("it can`t be empty...")
        return false
    }
    addTodo({
        id: todoList.value.length + 1,
        text: text.value
    })
}

</script>
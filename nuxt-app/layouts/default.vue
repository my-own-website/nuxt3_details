<template>
    <div>
      <header class="shadow-sm bg-slate-600">
        <nav class="container mx-auto p-4 flex justify-between">
            <nuxt-link to="/" class="font-bold">Make Your Dream !</nuxt-link>
            <ul class="flex gap-4">
                <li><nuxt-link to="/" class="font-bold">HOME</nuxt-link></li>
                <li><nuxt-link to="/products" class="font-bold">PRODUCTS</nuxt-link></li>
            </ul>
        </nav>
      </header>
      <div class="container">
        <slot/>
      </div>
    </div>
</template>
<template>
    <div>
        <router-link :to="{name: 'home'}">Logo</router-link>
        <nav>
            <router-link tag="li" :to="{name: 'home'}"><a>Home</a></router-link>
            <router-link tag="li" :to="{name: 'about'}"><a>About</a></router-link>
            <router-link tag="li" :to="{name: 'portfolio'}"><a>Portfolio</a></router-link>
            <router-link tag="li" :to="{name: 'contact'}"><a>Contact</a></router-link>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "navigation.vue"
    }
</script>

<style scoped>

</style>
<template>
    <div>
        <button v-bind="$attrs" v-on="$listeners">
            <slot></slot>
        </button>
    </div>
</template>

<script>
    export default {
        name: "BaseButton",
        inheritAttrs: false
    }
</script>

<style scoped>

</style>
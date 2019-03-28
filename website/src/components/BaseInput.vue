<template>
    <div>
        <input :value="value" @input="updateValue" v-bind="$attrs"/>
    </div>
</template>

<script>
    export default {
        name: "BaseInput",
        inheritAttrs: false,

        props: {
            value: [String, Number]
        },

        methods: {
            updateValue(event){
                this.$emit('input', event.target.value);
            }
        }
    }
</script>

<style scoped>

</style>
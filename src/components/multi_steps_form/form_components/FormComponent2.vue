<template>
    <slot type="step1">
        <h3>Step 2</h3>
        <label>Text 2: <input type="text"></label>
        <button type="button" @click="nextStep()">Next</button>
    </slot>
</template>
<script>
    export default {
        props: ['next-step'],
        methods: {
            nextStep(){
                this.$emit('next-step', 3)
            }
        }
    };
</script>
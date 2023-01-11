<template>
    <slot type="step1">
        <b>Step 1</b>
        <label>Name: <input type="text" required></label>
        <label>Email: <input type="email"></label>
        <label>Phone: <input type="number"></label>
        <button type="submit" @click="nextStep()">Next</button>
    </slot>
</template>
<script>
    export default {
        props: ['next-step'],
        methods: {
            nextStep(){
                this.$emit('next-step', 2)
            }
        }
    };
</script>